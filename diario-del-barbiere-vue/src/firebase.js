// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP0wRCEn9RTbgYmlIqPUqE2FBi1AHQSxE",
  authDomain: "diario-del-barbiere.firebaseapp.com",
  projectId: "diario-del-barbiere",
  storageBucket: "diario-del-barbiere.firebasestorage.app",
  messagingSenderId: "104922269012",
  appId: "1:104922269012:web:414d7a1817c1d97e1ff4c1",
  measurementId: "G-CZF15K90P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})
const facebookProvider = new FacebookAuthProvider()
facebookProvider.setCustomParameters({
  display: 'popup'
})

export { auth, googleProvider, facebookProvider, signInWithPopup }