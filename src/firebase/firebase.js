// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDasYAG-ueLq7vsCIH5SPZseQ2hl5npZfM",
  authDomain: "getmyguide-5ceff.firebaseapp.com",
  projectId: "getmyguide-5ceff",
  storageBucket: "getmyguide-5ceff.appspot.com",
  messagingSenderId: "578363453460",
  appId: "1:578363453460:web:5b1b8031c03211fe70b701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth,db, storage};
