// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4uO78Dr16imGaO_J6FOB0eat2YuVeCyE",
  authDomain: "bgwebsite-a709c.firebaseapp.com",
  projectId: "bgwebsite-a709c",
  storageBucket: "bgwebsite-a709c.appspot.com",
  messagingSenderId: "156678948261",
  appId: "1:156678948261:web:b6faf2bffc2f976c87944c",
  measurementId: "G-YJJJ7SKB4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
