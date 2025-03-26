const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getStorage } = require("firebase/storage");

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqsVb6ZqVSKjWPgMbi1OwQhnT0b0NEtKY",
  authDomain: "medlink-df0af.firebaseapp.com",
  projectId: "medlink-df0af",
  storageBucket: "medlink-df0af.appspot.com",
  messagingSenderId: "563225052829",
  appId: "1:563225052829:web:1d3d7869d90833df033674",
  measurementId: "G-9VRF8P7H1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

console.log("Firebase Initialized");

// Export for other modules
module.exports = { app, auth, storage };
