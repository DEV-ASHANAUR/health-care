import { useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import initializeFirebase from '../firebase/firebase.init';
initializeFirebase();

const useFirebase = () => {
    const[user,setUser] = useState([]);
    //loadinf
    const[isLoading,setIsLoading] = useState(true);
    //google provider
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    //email password manual login
    const emailPasswordSignIn = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password); 
    }
    //updateProfile
    const updateUserProfile = (name) =>{
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          }).then((result) => {
            // Profile updated!
            const auth = getAuth();
            setUser(auth.currentUser);
            console.log('profile updated',auth.currentUser);
          }).catch((error) => {
            // An error occurred
            console.log('error while update',error);
          }).finally(()=>{
            setIsLoading(false);
        });
    }
    //manual email password sign up
    const manualSignUp = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //google sign In
    const googleSignInLogin = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider);
    }
    // useEffect for monitoring user login or not
    useEffect(()=>{
        const notUnsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {
                // User is signed out
                setUser({}); 
                console.log('user is Sign out');
            }
            setIsLoading(false)
        });
        return() => notUnsubscibe;
    },[]);
    //logout user
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth)
        .then(res=>{
            setUser({});
            console.log('log out Success');
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setIsLoading(false);
        });
    }
    // return all 
    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        googleSignInLogin,
        manualSignUp,
        emailPasswordSignIn,
        updateUserProfile,
        logOut
    }
};

export default useFirebase;