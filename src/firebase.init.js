// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBos7nAI5LrFQUDxnlfY4Px3-27fahSyso",
	authDomain: "cardiology-research-group.firebaseapp.com",
	projectId: "cardiology-research-group",
	storageBucket: "cardiology-research-group.appspot.com",
	messagingSenderId: "108478046299",
	appId: "1:108478046299:web:e43602bc7f769142ec9f7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
