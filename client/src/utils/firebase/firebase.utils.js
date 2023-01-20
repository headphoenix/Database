// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVO-4dQWBxk1gR7yfbp3cctbr3DWxYsCI",
  authDomain: "qodesh-c01fa.firebaseapp.com",
  projectId: "qodesh-c01fa",
  storageBucket: "qodesh-c01fa.appspot.com",
  messagingSenderId: "8702178952",
  appId: "1:8702178952:web:eebed465e5a6e28bb9513d"
};

export const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};