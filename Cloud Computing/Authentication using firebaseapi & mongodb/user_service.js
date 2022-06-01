const firebase = require("firebase/app");
require("firebase/auth");


//const apiKey = process.env.AIzaSyA_RYCWnMldZLKYs5EJED9TL6gse5lWxVk;
const firebaseConfig = {
  apiKey: "AIzaSyBLalJ7ZbXZS7s_74S70KLKP3AP9kw6HPg",
  authDomain: "my-firebase-chat-14c91.firebaseapp.com",
  databaseURL: "https://my-firebase-chat-14c91-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-firebase-chat-14c91",
  storageBucket: "my-firebase-chat-14c91.appspot.com",
  messagingSenderId: "678557426644",
  appId: "1:678557426644:web:9fab13f08139b3dd67ec41",
  measurementId: "G-8Y9W3STYTT"
};

const fb = firebase.initializeApp(firebaseConfig);
/*const fb = firebase.initializeApp({
  apiKey: apiKey,
});*/

exports.addUser = (email, password) =>
  fb.auth().createUserWithEmailAndPassword(email, password);

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);
