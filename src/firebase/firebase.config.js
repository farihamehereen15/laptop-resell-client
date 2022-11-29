// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcPlhpBq0phXvjn-6mG5DmtXhWt5EyKjM",
    authDomain: "laptop-resell-client.firebaseapp.com",
    projectId: "laptop-resell-client",
    storageBucket: "laptop-resell-client.appspot.com",
    messagingSenderId: "144645486675",
    appId: "1:144645486675:web:b606bc2bc427cdab9daea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app