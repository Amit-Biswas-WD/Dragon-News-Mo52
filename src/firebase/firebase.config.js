// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQpsMKjMSBwQwbjIv-2v_8nK5jiAi8KzA",
  authDomain: "dragon-news-mo52.firebaseapp.com",
  projectId: "dragon-news-mo52",
  storageBucket: "dragon-news-mo52.firebasestorage.app",
  messagingSenderId: "446571207455",
  appId: "1:446571207455:web:1a45aeb3e5a166d39cae2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
