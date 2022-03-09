import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyBMN3he7Ez5lNqrLyuz2xFcIVLBpsAhRso",
  authDomain: "work-now-6ba72.firebaseapp.com",
  projectId: "work-now-6ba72",
  storageBucket: "work-now-6ba72.appspot.com",
  messagingSenderId: "525416063334",
  appId: "1:525416063334:web:9e554a7c06630d8cc0a8a7"
};

const app = initializeApp(firebaseConfig);

const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const db = getFirestore();
export  {
    app,
    google,
    facebook,
    db
}