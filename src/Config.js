// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHlQK32Pp8yODbhThzvC6vaE36exsGUDs",
  authDomain: "top-pic-28acd.firebaseapp.com",
  databaseURL: "https://top-pic-28acd-default-rtdb.firebaseio.com",
  projectId: "top-pic-28acd",
  storageBucket: "top-pic-28acd.appspot.com",
  messagingSenderId: "722258064323",
  appId: "1:722258064323:web:ab05a106fde4fca9fcc376",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
