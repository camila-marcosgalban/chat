// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqjXQMLwhg3EF9M1lGte4SW9XFUXaj6cw",
  authDomain: "dvchat-3c5ee.firebaseapp.com",
  projectId: "dvchat-3c5ee",
  storageBucket: "dvchat-3c5ee.appspot.com",
  messagingSenderId: "718835639478",
  appId: "1:718835639478:web:ddd30f56bbdcb1f0b3b217"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const authentication = getAuth(app)
export {db, storage, authentication};