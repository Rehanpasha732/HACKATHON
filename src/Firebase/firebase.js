import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCLSwuGf9XUxqH3OOj2tMvRXNNxi6SmjKQ",
    authDomain: "final-hackathon-155fd.firebaseapp.com",
    projectId: "final-hackathon-155fd",
    storageBucket: "final-hackathon-155fd.appspot.com",
    messagingSenderId: "791795369827",
    appId: "1:791795369827:web:341aed26a7c763b6713556",
    measurementId: "G-M5JJSHFXCH"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const storage = getStorage(app)

export {
    db,
    auth
}