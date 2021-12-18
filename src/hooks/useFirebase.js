import initializeFirebase from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase inittializetion
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoadding, setIsLoadding] = useState(true);
    const [error, setError] = useState();
    const auth = getAuth();

    // Registration User 
    const registerUser = (email, password) => {
        setIsLoadding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoadding(false));
        ;
    }
    // LoginUser 
    const loginUser = (email, password) => {
        setIsLoadding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoadding(false));
        ;
    }
    // Observation user State 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoadding(false)
        });
        return () => unSubscribe;
    }, [auth])

    // Logout user 
    const Logout = () => {
        setIsLoadding(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoadding(false))
            ;

    }

    return {
        registerUser, user, Logout, loginUser, isLoadding, error
    }

}

export default useFirebase;