import {collection, doc, getDocs} from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword, UserCredential} from "firebase/auth";

import {db} from "./fairbase";

export const getCases = async () => {

    const email:string = process.env.NEXT_FAIRBASE_EMAIL ?? '';
    const password:string = process.env.NEXT_FAIRBASE_PASSWORD ?? '';

    const auth = getAuth();
    try {
        const userCredential:UserCredential = await signInWithEmailAndPassword(auth, email, password);
        // const user = userCredential.user;
        // console.log(user);

        const casesRef = collection(db, "cases");
        const casesSnap = await getDocs(casesRef);
        const result =  casesSnap.docs.map((doc: any) => doc.data())

        // console.log(result);

        // console.log(result);
    }  catch(error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }

}

