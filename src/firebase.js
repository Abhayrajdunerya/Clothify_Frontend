import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCX9eWikTyDDjBJ-vP9839CiKsvRgFHX2Q",
    authDomain: "ecommercev2-3265d.firebaseapp.com",
    projectId: "ecommercev2-3265d",
    storageBucket: "ecommercev2-3265d.appspot.com",
    messagingSenderId: "296195690600",
    appId: "1:296195690600:web:025c849ecabbad1ef76bdd",
    measurementId: "G-X5SN2DKVF8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCX9eWikTyDDjBJ-vP9839CiKsvRgFHX2Q",
//   authDomain: "ecommercev2-3265d.firebaseapp.com",
//   projectId: "ecommercev2-3265d",
//   storageBucket: "ecommercev2-3265d.appspot.com",
//   messagingSenderId: "296195690600",
//   appId: "1:296195690600:web:025c849ecabbad1ef76bdd",
//   measurementId: "G-X5SN2DKVF8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);