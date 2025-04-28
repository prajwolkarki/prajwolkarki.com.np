// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvtMhwDGHG6gxcH3cswiJmky7wP5gvD6A",
  authDomain: "guestbook-97e06.firebaseapp.com",
  projectId: "guestbook-97e06",
  storageBucket: "guestbook-97e06.firebasestorage.app",
  messagingSenderId: "191171892860",
  appId: "1:191171892860:web:a4da1847013bf3f4a71bf9",
  measurementId: "G-RG5TRQC9Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();