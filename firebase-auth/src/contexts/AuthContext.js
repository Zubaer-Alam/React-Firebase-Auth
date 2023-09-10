import React, {useContext, useEffect, useState} from "react";
import {auth} from "../firebase";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export {  AuthProvider, useAuth };
