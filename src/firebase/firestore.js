import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDbEI4deDn9KZs2XUJrUCK6JfmYYOyWSc8",
    authDomain: "taranggaraktaseba-22381.firebaseapp.com",
    projectId: "taranggaraktaseba-22381",
    storageBucket: "taranggaraktaseba-22381.appspot.com",
    messagingSenderId: "55894070923",
    appId: "1:55894070923:web:6fa6b639a6454250cba68e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firebaseDb = getFirestore(app)

export default firebaseDb;