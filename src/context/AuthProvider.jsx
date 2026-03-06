import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState  } from 'react';
import { auth } from '../firebase/firebase.config';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {

   const [user, setUser]=useState(null);
   const [loading, setLoading]=useState(true);
   console.log(user);
  
    

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return ()=>{
          unSubscribe();
        }
      },[])


    const authData={
        createUser,
        user,
        setUser,
        logOutUser,
        loginUser,
        loading
        
    }
    
    
    
    return (
       <AuthContext value={authData}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;