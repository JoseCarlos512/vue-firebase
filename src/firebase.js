
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCAETT8Lt8ShDhH1__67mmF4voaswZXL0",
  authDomain: "vue-jc.firebaseapp.com",
  projectId: "vue-jc",
  storageBucket: "vue-jc.appspot.com",
  messagingSenderId: "367653385192",
  appId: "1:367653385192:web:2125b8b20c523ee70eea5d",
  measurementId: "G-NDN212D5GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;