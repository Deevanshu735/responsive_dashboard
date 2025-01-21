import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbLPhBur3UxN3c3-fXCKDoUfeMc-EB8LU",
  authDomain: "react-327df.firebaseapp.com",
  projectId: "react-327df",
  storageBucket: "react-327df.firebasestorage.app",
  messagingSenderId: "398383967917",
  appId: "1:398383967917:web:98bf2d3ea3449a1a736024"
};


export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);