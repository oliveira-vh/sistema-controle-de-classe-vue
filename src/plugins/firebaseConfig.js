import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAzwRZv_d9sOdaWGRLd6jyeGoHI1wAUMfk",
    authDomain: "ptp-0012020.firebaseapp.com",
    databaseURL: "https://ptp-0012020.firebaseio.com",
    projectId: "ptp-0012020",
    storageBucket: "ptp-0012020.appspot.com",
    messagingSenderId: "131805651114",
    appId: "1:131805651114:web:caca4f934a074563b930d3",
    measurementId: "G-0FVK7F789P"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

const usersCollection = db.collection('users')

export {
db,
auth,
usersCollection
}