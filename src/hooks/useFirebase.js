import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuth from "../Firebase/firebase.init";

firebaseAuth();
const auth = getAuth();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const LogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        });
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        user,
        error,
        signInWithGoogle,
        LogOut,
        signUpWithEmail,
        signInWithEmail
    }

}

export default UseFirebase;