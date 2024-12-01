import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext=createContext(null)
const Provider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)

    //sign up
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInuser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
               user,
            loading,
            createUser,
            singInuser
            
          }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;