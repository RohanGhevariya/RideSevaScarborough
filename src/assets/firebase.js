// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOOJef8Mwv3x_ZZdHtjiCV1lD65MiR0c4",
  authDomain: "scarborough-app-test.firebaseapp.com",
  databaseURL: "https://scarborough-app-test-default-rtdb.firebaseio.com",
  projectId: "scarborough-app-test",
  storageBucket: "scarborough-app-test.appspot.com",
  messagingSenderId: "864190640223",
  appId: "1:864190640223:web:be053a113d6d473649ebea",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
