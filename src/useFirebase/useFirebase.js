import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuth from "../Firebase/firebase.init";

firebaseAuth();
const auth = getAuth();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
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
        signInWithGoogle
    }

}

export default UseFirebase;