import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
    apiKey: "AIzaSyDKM4iERRuM6V8iQ98ocQp1tzpmd0jwVNc",
    authDomain: "marketcoderhouse.firebaseapp.com",
    projectId: "marketcoderhouse",
    storageBucket: "marketcoderhouse.appspot.com",
    messagingSenderId: "97536854303",
    appId: "1:97536854303:web:02c2d659cbbfc1d784482a"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);