import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
;
//import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAdwJ7UsEGJBMPlsQzyMt_OwjQPbr-ijKM",
  authDomain: "cart-c0669.firebaseapp.com",
  projectId: "cart-c0669",
  storageBucket: "cart-c0669.appspot.com",
  messagingSenderId: "170594314760",
  appId: "1:170594314760:web:12b125e5fd36ee1e327fbd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
