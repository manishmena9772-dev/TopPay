// Import the functions you need from the SDK
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBDVY3AF94OObF83mB5nOJQqShv8lhzPbU",
  authDomain: "top-pay-d1374.firebaseapp.com",
  projectId: "top-pay-d1374",
  storageBucket: "top-pay-d1374.firebasestorage.app",
  messagingSenderId: "354792718361",
  appId: "1:354792718361:web:d2bc0f431001b4c05f6a88",
  measurementId: "G-VJ62FYN86E",
};

// Prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
