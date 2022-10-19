// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYWl0Ubt3ooCP2XKQoVbnDAugoqwvr44k",
  authDomain: "cms-blog-47f0c.firebaseapp.com",
  projectId: "cms-blog-47f0c",
  storageBucket: "cms-blog-47f0c.appspot.com",
  messagingSenderId: "4540130005",
  appId: "1:4540130005:web:67d518000c96877b34385c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
