import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyB4iHaJuErT9ZlvC207IPl6h9owC_3Zcfc",
  authDomain: "work-now-jorge-osmeily.firebaseapp.com",
  projectId: "work-now-jorge-osmeily",
  storageBucket: "work-now-jorge-osmeily.appspot.com",
  messagingSenderId: "31975578175",
  appId: "1:31975578175:web:e0c29102dced478182b68a"
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