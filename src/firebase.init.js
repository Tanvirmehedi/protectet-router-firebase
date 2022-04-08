// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJqwJ2-4dMOLME30BmosxBvSoMBNzFg0A",
  authDomain: "route-firebase-instigation.firebaseapp.com",
  projectId: "route-firebase-instigation",
  storageBucket: "route-firebase-instigation.appspot.com",
  messagingSenderId: "672678343078",
  appId: "1:672678343078:web:a1295bc7022908dcc81f67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
