// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz7CjmMUKlodBdVbCUQjz-oMWKH5xw_4A",
  authDomain: "travel-trek-e5c58.firebaseapp.com",
  projectId: "travel-trek-e5c58",
  storageBucket: "travel-trek-e5c58.appspot.com",
  messagingSenderId: "170634817640",
  appId: "1:170634817640:web:8c2d223763d41c3a89cbdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;