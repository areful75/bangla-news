import React, { createContext, useState } from 'react';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  
    const userInfo={
        name:"John Doe",
        email:"omi@gmail.com"
        
    }
    
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;