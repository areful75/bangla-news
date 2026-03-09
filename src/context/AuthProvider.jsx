import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState  } from 'react';
import { auth } from '../firebase/firebase.config';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {

   const [user, setUser]=useState(null);
   const [loading, setLoading]=useState(true);
   //console.log(user);
  
    

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser, updateData);
    }

    const loginUser=(email,password)=>{
        setLoading(true);
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
        loading,
        updateUser
        
        
    }
    
    
    
    return (
       <AuthContext value={authData}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;