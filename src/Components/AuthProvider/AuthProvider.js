import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.init';
import { useEffect } from 'react';

export const AuthContext =createContext();

const auth = getAuth(app)





const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();


    const register = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

        const providerlogin = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
        };
        const logout = () =>{
            return signOut (auth)
        }
        const googleLogin = () =>{
            return signInWithPopup (auth,googleProvider)
        }

        useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
            })
            return () =>{
                unsubscribe()
            }
        },[])

        const authInfo = {providerlogin,register,user,logout,googleLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;