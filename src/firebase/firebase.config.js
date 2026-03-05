// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMOJD5ZJXcAUz4j0xZ1wiriApuwCYyMOQ",
  authDomain: "bangla-news-aeb9b.firebaseapp.com",
  projectId: "bangla-news-aeb9b",
  storageBucket: "bangla-news-aeb9b.firebasestorage.app",
  messagingSenderId: "229466138667",
  appId: "1:229466138667:web:e69c53d8796d8530bb626e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
