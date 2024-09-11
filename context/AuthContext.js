'use client'

import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react'
import { useState, useContext, useEffect } from 'react'

const AuthContext = React.createContext();

export function useAuth(){          // useAuth is a custom HOOK
    return useContext(AuthContext);
}

// Why we using this export function useAuth ?
// <--- ANS --->
// Providing Contextual Data: The useAuth function simplifies the process of accessing the value of the 
// AuthContext context within components. Instead of manually passing the context value as a prop to 
// each component, components can simply call useAuth to obtain the context value.

// Centralized Authentication Management: The AuthContext context is often used to store and 
// manage authentication-related information, such as user credentials, login status, and access 
// tokens. By using useAuth, components can easily access this information and perform 
// authentication-related operations without having to handle the context directly.

// Code Reusability: The useAuth function can be reused in multiple components, promoting
//  code organization and maintainability.

export function AuthProvider({children}){
    
    const [currentUser,setcurrentUser] = useState(null);
    const [userDataObj,setuserDataObj] = useState(null);
    const [loading,setLoading] = useState(true);

    function signup(email,password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
        setuserDataObj({});
        setcurrentUser(null);
        return signOut(auth);
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, async user =>{
            try {
                // set user to our local context state
                setLoading(true)
                setcurrentUser(user)
                if(!user){
                    console.log("NO USER FOUND")
                    return
                }

                //if user exist fetch data from firestore
                console.log("fetching...")
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                let firebaseData = {}
                if(docSnap.exists()){
                    console.log('find user data')
                    firebaseData= docSnap.data()
                    console.log(firebaseData)
                }

                setuserDataObj(firebaseData)

            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false);
            }
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        userDataObj,
        signup,
        login,
        logout,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}