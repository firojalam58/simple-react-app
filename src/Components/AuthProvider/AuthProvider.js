import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase.init';
import { useEffect } from 'react';

export const AuthContext =createContext();

const auth = getAuth(app)





const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();


    const register = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

        const providerLogin = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
        };
        const logout = () =>{
            return signOut (auth)
        }
        const googleLogin = () =>{
            return signInWithPopup (auth,googleProvider)
        }
        const userUpdate = (profile) =>{
            return updateProfile(auth.currentUser,profile)
        };
        useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                setLoading(false)
            })
            return () =>{
                unsubscribe()
            }
        },[])

        const authInfo = {providerLogin, register, user, logout, googleLogin, loading, userUpdate}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;