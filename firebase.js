// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAw0r0O9VwTcewmikIbf10aSGDZSI78cfE",
  authDomain: "meupar-f7e74.firebaseapp.com",
  projectId: "meupar-f7e74",
  storageBucket: "meupar-f7e74.appspot.com",
  messagingSenderId: "516444713329",
  appId: "1:516444713329:web:41b392f38baad5d4d986d0",
  measurementId: "G-GSVWKTLYHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };