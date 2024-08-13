import {collection, getDocs} from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword, UserCredential} from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import {db} from "./firebase";
const storage = getStorage();

interface CasesContent {
    type: string,
    value: [] | string
}
export interface Cases {
    status?: string,
    publish_date?: {} | string,
    created_on?: {},
    content?: CasesContent[],
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

        const casesRef = collection(db, "cases", "");
        const casesSnap = await getDocs(casesRef);
        let header_image:string | undefined;
        let newImages: string[];
        const result:Cases[] =  await Promise.all(casesSnap.docs.map(async (doc: any) => {
            const contentImages = doc.data().content.find((el: CasesContent) => el.type === "images")?.value;
            if(doc.data().header_image) {
                header_image = await getDownloadURL(ref(storage, doc.data().header_image));
            }
            if(contentImages) {
                newImages = await Promise.all(contentImages.map(async (image:string) => {
                    return await getDownloadURL(ref(storage, image));
                }))
            }
            return {
                ...doc.data(),
                header_image,
                content: [
                    ...doc.data().content.filter((el: CasesContent) => el.type !== 'images'),
                    {
                        type: 'images',
                        value: newImages
                    }
                ]
            }
        }))
        return result;
    }  catch(error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }

}

