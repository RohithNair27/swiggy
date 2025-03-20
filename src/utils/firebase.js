// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "swiggy-d58a6.firebaseapp.com",
  projectId: "swiggy-d58a6",
  storageBucket: "swiggy-d58a6.firebasestorage.app",
  messagingSenderId: "265264237069",
  appId: "1:265264237069:web:16de4a6ac01f5c49d7e344",
  measurementId: "G-D5F61D0E3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";

export { auth };
