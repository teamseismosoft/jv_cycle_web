
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB45T5gAOIsWvq5NW7HpdV01bFqN9Jvg88",
  authDomain: "jvcycles-aa2ec.firebaseapp.com",
  projectId: "jvcycles-aa2ec",
  storageBucket: "jvcycles-aa2ec.appspot.com",
  messagingSenderId: "116185043105",
  appId: "1:116185043105:web:babb83ac56108ee7e320e0",
  measurementId: "G-2Q7WEE32WH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const fs = getFirestore(app);
export { db, fs };