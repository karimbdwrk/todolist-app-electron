import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const config = {
	apiKey: "AIzaSyDHUuyX1khlDM_fvujf0R7dwgz6sqbhLFI",
	authDomain: "todolist-app-e7a23.firebaseapp.com",
	databaseURL:
		"https://todolist-app-e7a23-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "todolist-app-e7a23",
	storageBucket: "todolist-app-e7a23.appspot.com",
	messagingSenderId: "525750650172",
	appId: "1:525750650172:web:25953139a8a633d13eca39",
	measurementId: "G-92GNT0K9DB",
};

const app = initializeApp(config);

export const db = getFirestore(app);
