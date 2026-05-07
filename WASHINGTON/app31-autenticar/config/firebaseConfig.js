// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0B5pNSwFpKrrYk2PqX8WYLm1EPoR9AWs",
  authDomain: "autenticartds2-a-937fa.firebaseapp.com",
  projectId: "autenticartds2-a-937fa",
  storageBucket: "autenticartds2-a-937fa.firebasestorage.app",
  messagingSenderId: "929020064320",
  appId: "1:929020064320:web:9676d1c99357be288365a5",
  measurementId: "G-7ZSCR2DJBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const autenticacao = getAuth(app);