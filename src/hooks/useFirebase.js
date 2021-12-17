import initializeFirebase from "../pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase inittializetion
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    // Registration User 
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    // Observation user State 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        });
        return () => unSubscribe;
    }, [])

    // Logout user 
    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    return {
        registerUser, user, Logout,
    }

}

export default useFirebase;