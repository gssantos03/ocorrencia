import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
  apiKey: "AIzaSyDjDXX-12FPOAwkZ2-QvCiyfudbw4cQvk0",
  authDomain: "alertaincendios.firebaseapp.com",
  databaseURL: "https://alertaincendios.firebaseio.com",
  projectId: "alertaincendios",
  storageBucket: "alertaincendios.appspot.com",
  messagingSenderId: "233943720324",
  appId: "1:233943720324:web:5d211dd0fcbc580dc33dd1",
  measurementId: "G-QHCL3EBEN5"
};

  if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;
  