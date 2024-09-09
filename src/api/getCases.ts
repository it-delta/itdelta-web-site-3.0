import {onAuth} from "@/api/onAuth";
import {collection, getDocs, query, where, limit} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {CasesType, CasesContentType} from "@/types/casesTypes";
import { formattedDate } from '@/lib/formatDate'
import { unstable_cache as cache } from "next/cache";

const storage = getStorage();
const getCases = async ():Promise<CasesType[] | undefined> => {
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
                publish_date: formattedDate(doc.data().publish_date.seconds),
                content: [
                    ...doc.data().content.filter((el: CasesContentType) => el.type !== 'images'), // Возвращаем все объекты кроме type: images
                    {
                        type: 'images',
                        value: urlImages,
                    } // добавляем обновленный объект с url изображениями
                ]
            }
        }))
        return  result.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
    }  catch(error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }

}

const getMainCases = async ():Promise<CasesType[] | undefined> => {
    await onAuth();
    try {
        const casesRef = collection(db, "cases");
        const casesQuery = query(casesRef, where('active', '==', true))
        const casesSnap = await getDocs(casesQuery);

        const result:CasesType[] =  await Promise.all(casesSnap.docs.map(async (doc: any) => {
            let logo:string = '';
            if(doc.data().logo) {
                logo = await getDownloadURL(ref(storage, doc.data().logo)); //  получаем url изображенмя из firebase Storage
            }
            return {
                id: doc.id,
                name: doc.data().name,
                type: doc.data().type,
                description: doc.data().description,
                publish_date: formattedDate(doc.data().publish_date.seconds),
                logo,
            }
        }))
        return result.sort((a, b) => new Date(a.publish_date).getTime() - new Date(b.publish_date).getTime()).slice(-3);
    }
    catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }

}

export const getMainCasesCache = cache(
  getMainCases,
  ["getMainCases"],
  {
      tags: ["getMainCases"],
      revalidate: 60 * 60 * 24
  }
)

export const getCasesCache = cache(
  getCases,
  ["getCases"],
  {
      tags: ["getCases"],
      revalidate: 60 * 60 * 24
  }
)