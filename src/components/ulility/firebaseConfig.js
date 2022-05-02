// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHpuQBxwO99MOLDPIhes98NiyVj0FjKNQ",
  authDomain: "drinks-ecommerce.firebaseapp.com",
  projectId: "drinks-ecommerce",
  storageBucket: "drinks-ecommerce.appspot.com",
  messagingSenderId: "530944385995",
  appId: "1:530944385995:web:cf10efcd502041e07b4c4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
