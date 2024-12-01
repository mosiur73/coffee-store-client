// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_zx2RXMpgTwRCMiWiQLJjXzACyBnL7Q",
  authDomain: "coffee-store-f4805.firebaseapp.com",
  projectId: "coffee-store-f4805",
  storageBucket: "coffee-store-f4805.firebasestorage.app",
  messagingSenderId: "1011729750829",
  appId: "1:1011729750829:web:768e0d7e32b8e6ecaed1a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);