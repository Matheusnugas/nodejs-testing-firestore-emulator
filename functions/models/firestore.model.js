// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTZxSqQ8LQOLqynGUAgqlgcTfPDTZOR1w",
  authDomain: "nugas-testing-projects.firebaseapp.com",
  projectId: "nugas-testing-projects",
  storageBucket: "nugas-testing-projects.appspot.com",
  messagingSenderId: "66695263090",
  appId: "1:66695263090:web:0151b1aab31fc712cc63eb"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;