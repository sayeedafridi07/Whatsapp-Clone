import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyC35CYQHUTIp3UpyDEtNvOBLVRT1QJZLnE",
  authDomain: "whatsapp-roomies.firebaseapp.com",
  projectId: "whatsapp-roomies",
  storageBucket: "whatsapp-roomies.appspot.com",
  messagingSenderId: "687191531595",
  appId: "1:687191531595:web:71f8ae1899bdf2bc732dce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
