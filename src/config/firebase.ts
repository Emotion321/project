// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3i9_mLRGd9vERhbj2rz5CYORy-OYlxoY",
  authDomain: "social-media-application-eb3ad.firebaseapp.com",
  projectId: "social-media-application-eb3ad",
  storageBucket: "social-media-application-eb3ad.appspot.com",
  messagingSenderId: "138038877313",
  appId: "1:138038877313:web:6fce2483219d61d2908180",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();