import React, { useState, createContext } from "react";

import { signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, auth } from "../../utils/firebase/firebase.utils";

import { onAuthStateChanged, signOut } from "firebase/auth"

export const AuthenticationContext = createContext();



export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
        setIsLoading(false);
      // ...
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInAuthUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
     if(password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
     }
     createAuthUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });

  }

const onLogout = () => {
  console.log('Hello')
  signOut(auth)
  .then(() => {
  setUser(null);
  setError(null);
}).catch((error) => {
  console.log(error)
})};


  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};