// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmmbG96FB_Lv4zEb4Ll8H7CJSO9Ccrhcc",
  authDomain: "react-86b64.firebaseapp.com",
  databaseURL: "https://react-86b64-default-rtdb.firebaseio.com",
  projectId: "react-86b64",
  storageBucket: "react-86b64.firebasestorage.app",
  messagingSenderId: "318589200599",
  appId: "1:318589200599:web:3df9e9785052a3bcfda892"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);