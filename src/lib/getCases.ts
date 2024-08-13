import {collection, getDocs} from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword, UserCredential} from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import {db} from "./firebase";
const storage = getStorage();
export interface Cases {
    status?: string,
    publish_date?: {} | string,
    created_on?: {},
    content?: [
        {
            value: string,
            type: string
        }
    ],
    header_image?: string,
    tags: [],
    name: string
}


export const getCases = async ():Promise<Cases[] | undefined> => {

    const email:string = process.env.NEXT_FIREBASE_EMAIL ?? '';
    const password:string = process.env.NEXT_FIREBASE_PASSWORD ?? '';

    const auth = getAuth();
    try {
        const userCredential:UserCredential = await signInWithEmailAndPassword(auth, email, password);
        // const user = userCredential.user;
        // console.log(user);

        const casesRef = collection(db, "cases");
        const casesSnap = await getDocs(casesRef);
        let url:string | undefined;
        const result:Cases[] =  await Promise.all(casesSnap.docs.map(async (doc: any) => {
            if(doc.data().header_image) {
                url = await getDownloadURL(ref(storage, doc.data().header_image));
            }
            return {
                ...doc.data(),
                header_image: url,
            }
        }))

        return result;
    }  catch(error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }

}
