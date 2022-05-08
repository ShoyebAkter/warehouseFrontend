// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGx_h8Q12aHyrC1oHJpI3j6aE3FZBTOU",
  authDomain: "carhouse-a8546.firebaseapp.com",
  projectId: "carhouse-a8546",
  storageBucket: "carhouse-a8546.appspot.com",
  messagingSenderId: "511525757284",
  appId: "1:511525757284:web:28ed265c23bb8043419a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;