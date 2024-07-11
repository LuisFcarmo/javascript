// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJESb8FD8OCvOh4nHkPa_k8GkvKFlt5RE",
  authDomain: "reactgram-c0785.firebaseapp.com",
  projectId: "reactgram-c0785",
  storageBucket: "reactgram-c0785.appspot.com",
  messagingSenderId: "1005715179503",
  appId: "1:1005715179503:web:a35a7fa97cb6c8caf2581a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// Export database
export { db };