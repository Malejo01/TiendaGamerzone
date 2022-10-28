import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDGDYmYvitYCf_VonEmmtVKHXE6xNDCmE",
  authDomain: "tiendagamerzone-958ed.firebaseapp.com",
  projectId: "tiendagamerzone-958ed",
  storageBucket: "tiendagamerzone-958ed.appspot.com",
  messagingSenderId: "1082167934191",
  appId: "1:1082167934191:web:eaa5b9e7f77f0a9aa1af1a",
  measurementId: "G-86PPJZJ7BC"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
