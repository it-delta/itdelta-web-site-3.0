import {onAuth} from "@/api/onAuth";
import {collection, getDocs, query, where, limit} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {CasesType, CasesContentType} from "@/types/casesTypes";
import { unstable_cache as cache } from "next/cache";

const storage = getStorage();

const fetchCasesCollection = async (): Promise<CasesType[]> => {
    await onAuth();
    try {
        const casesRef = collection(db, "cases", "");
        const casesQuery = query(casesRef, where('active', '==', true))
        const casesSnap = await getDocs(casesQuery);

        const result:CasesType[] =  await Promise.all(casesSnap.docs.map(async (doc: any) => {
            let logo:string | undefined = undefined;
            let urlImages: string[] | undefined = undefined;
            const contentImagesPath = doc.data().content.find((el: CasesContentType) => el.type === "images")?.value; // Получаем все пути изображения
            if(doc.data().logo) {
                logo = await getDownloadURL(ref(storage, doc.data().logo)); //  получаем url изображенмя из firebase Storage
            }
            if(contentImagesPath) {
                urlImages = await Promise.all(contentImagesPath.map(async (image:string) => {
                    return await getDownloadURL(ref(storage, image)); // получаем url изображенмя из firebase Storage
                }))
            }
            return {
                id: doc.id,
                ...doc.data(),
                logo,
                publish_date: new Date(doc.data().publish_date.seconds * 1000),
                content: [
                    ...doc.data().content.filter((el: CasesContentType) => el.type !== 'images'), // Возвращаем все объекты кроме type: images
                    {
                        type: 'images',
                        value: urlImages,
                    } // добавляем обновленный объект с url изображениями
                ]
            }
        }))
        return  result.sort((a, b) => b.publish_date.getTime() - a.publish_date.getTime());

    } catch(error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }
    return [];
}

export const getMainCases = async ():Promise<CasesType[] | undefined> => {
    let res = await getCases() ?? [];

    return res.map((e) => ({
        id: e.id,
        name: e.name,
        type: e.type,
        description: e.description,
        publish_date: e.publish_date,
        logo: e.logo,
    })).slice(0,3);
}

export const getCases = fetchCasesCollection/*cache(
  getCases,
  ["getCases"],
  {
      tags: ["getCases"],
  }
)*/