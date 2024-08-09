import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_eav83KmvoLRFYePAdsqA1VI7Gb15Kok",
    authDomain: "itdelta-web-site-3.firebaseapp.com",
    projectId: "itdelta-web-site-3",
    storageBucket: "itdelta-web-site-3.appspot.com",
    messagingSenderId: "763136556116",
    appId: "1:763136556116:web:19e07ff77782644abb01c1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
