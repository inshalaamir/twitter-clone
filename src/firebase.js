import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBAGaRzjI-EDMIqEJ8WRXycEvDZcGGpqXw",
    authDomain: "twitter-clone-3c510.firebaseapp.com",
    projectId: "twitter-clone-3c510",
    storageBucket: "twitter-clone-3c510.appspot.com",
    messagingSenderId: "725123868384",
    appId: "1:725123868384:web:2c1cda48d116de16439285",
    measurementId: "G-CK7HMPC2JT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;