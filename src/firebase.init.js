// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyD304vUV3yckQaNUZeUQ2ZAfuMioplZ9bU",
	authDomain: "vrd-lab.firebaseapp.com",
	projectId: "vrd-lab",
	storageBucket: "vrd-lab.appspot.com",
	messagingSenderId: "863284025090",
	appId: "1:863284025090:web:e07ca8e3714bde2a08541b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
