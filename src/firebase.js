import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyABYuxWpZOSi1CNDRuJch1Q-UXI5HyxZJA",
  authDomain: "onlineclassroom-fa838.firebaseapp.com",
  databaseURL: "https://onlineclassroom-fa838.firebaseio.com",
  projectId: "onlineclassroom-fa838",
  storageBucket: "onlineclassroom-fa838.appspot.com",
  messagingSenderId: "1029695010262",
  appId: "1:1029695010262:web:1ba762e52bf08b8dc1e077",
  measurementId: "G-TTZSGWPG59",
};
// Initialize Firebase
var defaultfirebase = firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
firebase.analytics();

export default firestore;
