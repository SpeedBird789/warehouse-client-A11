// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdLld_ZHIDzbs4mwIyEr6FL3O-SxT2pQM",
  authDomain: "warehouse-management-87a78.firebaseapp.com",
  projectId: "warehouse-management-87a78",
  storageBucket: "warehouse-management-87a78.appspot.com",
  messagingSenderId: "624841852294",
  appId: "1:624841852294:web:f826281df31822d8445807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;