import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializingAuthentication from "../firbase/firebase.init";
 
initializingAuthentication();


const useFirebase =  () => {
      const [user, setUser] = useState({})
      
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then( result => {
            const user = result.user 
            setUser(user);
            console.log(user);
        })

    }

    
    

    const logOut = () => {
        signOut(auth)
        .then( () => {})
    }

    useEffect( () => {

    }, [] )

    return {signInUsingGoogle, user, logOut, }
}

export default useFirebase ;