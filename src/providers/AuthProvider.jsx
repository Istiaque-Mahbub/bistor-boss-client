import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const creteUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const updateUserProfile = (name,photo) =>{
       return updateProfile(auth.currentUser,{
            displayName:name , photoURL:photo
        })
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                // get token and store client side
                const userInfo = {email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                        setLoading(false);
                    }
                })
            }else{
                // TODO: remove token if you store token in client side
                localStorage.removeItem('access-token')
                setLoading(false);
            }
            
        });
        return ()=>{
           return unsubscribe();
        }
    },[axiosPublic])

    const authInfo ={
       user,setUser,loading,setLoading,creteUser,signIn,logOut,updateUserProfile,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;