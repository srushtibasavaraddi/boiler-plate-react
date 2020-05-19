import *  as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCmTlN75cymMpJeM-MA3ayXqQ_YarZMpV0",
  authDomain: "school-website-6139e.firebaseapp.com",
  databaseURL: "https://school-website-6139e.firebaseio.com",
  projectId: "school-website-6139e",
  storageBucket: "school-website-6139e.appspot.com",
  messagingSenderId: "803885833321",
  appId: "1:803885833321:web:0047936f43f4f5148d96f8",
  measurementId: "G-PSS4VXSK1Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database =firebase.database();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {firebase,googleAuthProvider,storage,database as default};