// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlBuEPqzVUpVnOnJwnc1nAyqyz4bzkbSE",
  authDomain: "portfoliositearthur.firebaseapp.com",
  projectId: "portfoliositearthur",
  storageBucket: "portfoliositearthur.appspot.com",
  messagingSenderId: "992407474004",
  appId: "1:992407474004:web:bec80e070e5144002382c1",
  measurementId: "G-2GVHQ1BG3E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();