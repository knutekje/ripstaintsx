// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; */


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // New import;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-bZ1wrXyeUrlfJ3Rfl_g2OUk_JFLiwGc",
  authDomain: "ripstain-d3429.firebaseapp.com",
  projectId: "ripstain-d3429",
  storageBucket: "ripstain-d3429.appspot.com",
  messagingSenderId: "664052766025",
  appId: "1:664052766025:web:8b7fc2d61993e7883f3698",
  measurementId: "G-FS0T3HP99N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;