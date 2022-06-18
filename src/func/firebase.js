import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDY8R1d0dMWWY_NfpxFk_ZvXfJVYWsLf6o",
    authDomain: "canva-clone-cf20e.firebaseapp.com",
    projectId: "canva-clone-cf20e",
    storageBucket: "canva-clone-cf20e.appspot.com",
    messagingSenderId: "945129446728",
    appId: "1:945129446728:web:3395648315fc0a87b2a77d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const storageref = firebase.storage().ref()

  export {auth, provider, storageref};
  export default db;  

