import { initializeApp } from 'firebase/app';

// Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCciyqOnPcUOz1jFseiKDz6Xs27vK6hIgI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "placementor-ai-d77f6.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "placementor-ai-d77f6",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "placementor-ai-d77f6.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "300461452825",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:300461452825:web:57e567ca11e72b82b1c488",
  measurementId: "G-9YYF01HXZB"
};

export const app = initializeApp(firebaseConfig);
