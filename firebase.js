import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyChQWXY56QwmjcRNN964gcFUH28KNJFrgg",
  authDomain: "cs47-dd87a.firebaseapp.com",
  databaseURL: "https://cs47-dd87a.firebaseio.com",
  projectId: "cs47-dd87a",
  storageBucket: "cs47-dd87a.appspot.com",
  messagingSenderId: "287383932413",
  appId: "1:287383932413:web:29f589c450e6c3b5331d94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

export default firestore;