// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtZFo9PKZpSgLvVYHwbxypPwXKz0rx84c",
    authDomain: "owl-health-portal.firebaseapp.com",
    databaseURL: "https://owl-health-portal-default-rtdb.firebaseio.com",
    projectId: "owl-health-portal",
    storageBucket: "owl-health-portal.appspot.com",
    messagingSenderId: "715831460086",
    appId: "1:715831460086:web:0ad6f041a7b8064cadacd7"
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
export default cong;