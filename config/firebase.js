import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrtqBJxBHIBgV5Gx9KO1slUtkIDcE5_LU",
  authDomain: "fir-chat-f879b.firebaseapp.com",
  projectId: "fir-chat-f879b",
  storageBucket: "fir-chat-f879b.appspot.com",
  messagingSenderId: "482692751921",
  appId: "1:482692751921:web:c9e01d0e751727f1032b10",
  measurementId: "G-NWQ13Q1706"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
