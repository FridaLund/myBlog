// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk3pTR_EVKVPVtsli3VJIijWs6N41h6tE",
  authDomain: "blog-1e9ed.firebaseapp.com",
  projectId: "blog-1e9ed",
  storageBucket: "blog-1e9ed.appspot.com",
  messagingSenderId: "171939772242",
  appId: "1:171939772242:web:820642235717673dbd2c8b",
  measurementId: "G-06Q6V3HPT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { app, auth, storage };
