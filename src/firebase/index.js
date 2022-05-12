import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
	apiKey: "AIzaSyDQr6I_QU7761VCl-7qmneOlUJjl-_EL14",
	authDomain: "truckers-bfb53.firebaseapp.com",
	projectId: "truckers-bfb53",
	storageBucket: "truckers-bfb53.appspot.com",
	messagingSenderId: "1066199968276",
	appId: "1:1066199968276:web:674afaf2abfdde91b99501",
	measurementId: "G-5BMMLP2RX3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

const storage = getStorage(app);

export { app as default, auth, db, storage };
