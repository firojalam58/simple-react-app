import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../Firebase/Firebase.init';

export const AuthContext =createContext();

const auth = getAuth(app)





const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})

    const register = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

        const providerlogin = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
        }

        const authInfo = {providerlogin,register}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;