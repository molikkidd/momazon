import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaQGMw3BVc88XKUwrIQIoyzmI8SphvS0w",
    authDomain: "mo-5c793.firebaseapp.com",
    projectId: "mo-5c793",
    storageBucket: "mo-5c793.appspot.com",
    messagingSenderId: "277036135007",
    appId: "1:277036135007:web:c8261598e0d5a273ade1ea"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore()

  export default db;