import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsKHcyTbT7U_B7QpXE8dc3V953ZTdnVTs",
  authDomain: "app-mozin.firebaseapp.com",
  projectId: "app-mozin",
  storageBucket: "app-mozin.firebasestorage.app",
  messagingSenderId: "949962738527",
  appId: "1:949962738527:web:e56660eb7c354f105e84ea"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithEmailAndPassword, signInWithPopup}