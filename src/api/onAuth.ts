import {getAuth, signInWithEmailAndPassword, UserCredential} from "firebase/auth";

export const onAuth = async () => {
    const email:string = process.env.NEXT_FIREBASE_EMAIL ?? '';
    const password:string = process.env.NEXT_FIREBASE_PASSWORD ?? '';

    const auth = getAuth();
    const userCredential:UserCredential = await signInWithEmailAndPassword(auth, email, password);
}