import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkXN5ABIza3mgtOfqdsqNMqEbWk-8D79U",
  authDomain: "freshfoodswap.firebaseapp.com",
  projectId: "freshfoodswap",
  storageBucket: "freshfoodswap.appspot.com",
  messagingSenderId: "95877355779",
  appId: "1:95877355779:web:9e83853887f5f3c125b136"
};
  
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth=getAuth();
const db = getFirestore(app);
export {app,auth,provider,db};