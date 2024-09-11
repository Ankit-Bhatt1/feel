
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'               // firebase mei authentication already hotti hai so it is easy to authenticate 
import {getFirestore} from 'firebase/firestore'     // firebase mei no-sql database hotta hai named 'firestore' usko import kara hai

const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);