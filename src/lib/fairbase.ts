import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_FAIRBASE_API_KEY,
    authDomain: process.env.NEXT_FAIRBAS_AUTH_DOMEN,
    projectId: process.env.NEXT_FAIRBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_FAIRBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_FAIRBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_FAIRBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
