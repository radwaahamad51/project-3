import { createContext, useEffect, useState } from "react"
import app from "../auth.init.js/firebase.config";
import {
 
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(); 
const auth = getAuth(app)
const AuthProvoder = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// wate
const [learData, setLearnData] = useState(null);

const handleAddBtn = (data) => {
  setLearnData(data); // Save the data to state
  console.log("Shared Context Data:", data); // Log for debugging
};







// wate
    

    const createNewUser = (email, password) => {
         setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
      };
      const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      };

      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };
      const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
      };

      const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        learData, 
        handleAddBtn
      };
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    return <AuthContext.Provider value={authInfo  }>{children}</AuthContext.Provider>

};
export default AuthProvoder;