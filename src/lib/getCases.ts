import {collection, doc, getDocs} from "firebase/firestore";
import {db} from "./fairbase";

export const getCases = async () => {
    const casesRef = collection(db, "cases");

    try {
        const casesSnap = await getDocs(casesRef);
        const result =  casesSnap.docs.map((doc) => {
            return doc.data()
        })
        console.log(result);
    }
    catch (e) {
        console.log(e, 'ERRORR');
    }

}

