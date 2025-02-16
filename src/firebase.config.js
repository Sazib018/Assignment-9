// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM-ej4iVe1BnPiYCSq98Mu43Ey8_kezqM",
  authDomain: "assignment-9-ca7c5.firebaseapp.com",
  projectId: "assignment-9-ca7c5",
  storageBucket: "assignment-9-ca7c5.firebasestorage.app",
  messagingSenderId: "619282863786",
  appId: "1:619282863786:web:03bf442af23e756aaa22d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default auth;