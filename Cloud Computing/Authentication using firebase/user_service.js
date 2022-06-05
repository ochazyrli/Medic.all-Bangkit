const res = require("express/lib/response");
const { auth } = require("firebase/app");
const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAjYlai-TyYlWMNAEHbpwmnNPHRYHFtlqA",
  authDomain: "medicall-firebase.firebaseapp.com",
  databaseURL: "https://medicall-firebase-default-rtdb.firebaseio.com",
  projectId: "medicall-firebase",
  storageBucket: "medicall-firebase.appspot.com",
  messagingSenderId: "1006325468737",
  appId: "1:1006325468737:web:759f2b1bd1049db9f140c0",
  measurementId: "G-ZFF4YXLKNX",
};

const fb = firebase.initializeApp(firebaseConfig);

exports.addUser = (email, password) => fb.auth().createUserWithEmailAndPassword(email, password);

exports.authenticate = (email, password) => fb.auth().signInWithEmailAndPassword(email, password);

exports.emailVerified = () => fb.auth().currentUser.emailVerified.valueOf();

exports.changepass = (email) => fb.auth().sendPasswordResetEmail(email);

exports.verifyemail = () => fb.auth().currentUser.sendEmailVerification();

exports.signOut = () => fb.auth().currentUser.signOut();
