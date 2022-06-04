// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4NIIIoS3LpYonNIFI01camndmhLzX_uc",
  authDomain: "catalog-book.firebaseapp.com",
  databaseURL: "https://catalog-book-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "catalog-book",
  storageBucket: "catalog-book.appspot.com",
  messagingSenderId: "239566857844",
  appId: "1:239566857844:web:c8fb42b50bede4ab711321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
