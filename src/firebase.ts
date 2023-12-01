// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTzb00NKEY8RmF0QWKiJiCHuCQrcwFZ5U",
  authDomain: "discord-clone-udemy-52d52.firebaseapp.com",
  projectId: "discord-clone-udemy-52d52",
  storageBucket: "discord-clone-udemy-52d52.appspot.com",
  messagingSenderId: "689177455249",
  appId: "1:689177455249:web:b70f6e0967f9cc1e0e2d30",
  measurementId: "G-34N0M4YPYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
