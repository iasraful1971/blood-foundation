import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider,
  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import initializeFirebase from "../firebase/firebase.initialize";

initializeFirebase();

const useFirebase = () => {
  const [loading, setLoading] =useState(true);
  const [success, setSuccess] =useState("");
  const [error, setError]=useState("");
  const [user, setUser] = useState({});
  
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();



   //google sign in
   const googleSignIn =() =>{
    setLoading(true)
    return signInWithPopup(auth ,GoogleProvider )
      .then((succes) => {
        toast.success("you've Successfully logged in");
      })
     .catch(error => {
         console.log(error)
         toast.error("There was something wrong");
     })
     .finally(() => {
      setLoading(false)
    })

    }
  // handle register
  const registerUser = (email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("success");
        setSuccess();
        setError("");
        window.location.href="/login"
        


      })
      .catch((error) => {
        console.log(error);
        setError()
        setSuccess("")
       
      })
      .finally(() => {
        setLoading(false)
      })
  };

  // handle login

  const loginUser =(email ,password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("you've Successfully logged in");
    window.location.href="/blood-register"
  })
  .catch((error) => {
    
    toast.error("There was something wrong");
  })
  .finally(() => {
    setLoading(false)
  })
  }
  // sign out

  const logOut = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => {
        setLoading(false)
      })
  };


  // manage user tab
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
          setUser({})
      }
      setLoading(false)
     
    });
    return() => unsubscribe;
  }, []);



// return
  return {
    user,
    googleSignIn,
    registerUser,
    loginUser,
    logOut,
    success,
     error,
    loading
  };
};
export default useFirebase;
