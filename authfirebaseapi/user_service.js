const res = require("express/lib/response");
const { auth } = require("firebase/app");
const firebase = require("firebase/app");
require("firebase/auth");

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

exports.addUser = (email, password) =>
  fb.auth().createUserWithEmailAndPassword(email, password);

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);

exports.emailVerified = () =>
  fb.auth().currentUser.emailVerified.valueOf();

exports.changepass = (email) =>
  fb.auth().sendPasswordResetEmail(email);

exports.verifyemail = () =>
  fb.auth().currentUser.sendEmailVerification();



