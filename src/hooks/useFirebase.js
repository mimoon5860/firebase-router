import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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

    const LogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error)
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
        LogOut
    }

}

export default UseFirebase;