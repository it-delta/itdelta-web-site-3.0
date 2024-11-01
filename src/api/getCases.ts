import {onAuth} from "@/api/onAuth";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {CasesType, CasesContentType} from "@/types/casesTypes";
import { unstable_cache as cache } from "next/cache";
import { serialize } from 'next-mdx-remote/serialize'
import rehypeShiki from '@leafac/rehype-shiki'
// @ts-ignore
import { remarkRehypeWrap} from 'remark-rehype-wrap';
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import { transliterate } from '@/lib/transliterate'
const shiki = require('shiki');

const storage = getStorage();

const fetchCasesCollection = async (): Promise<CasesType[]> => {
    await onAuth();
    let highlighter = await shiki.getHighlighter({
        theme: 'css-variables',
    })
    try {
        const casesRef = collection(db, "cases", "");
        const casesQuery = query(casesRef, where('active', '==', true))
        const casesSnap = await getDocs(casesQuery);

        const result:CasesType[] =  await Promise.all(casesSnap.docs.map(async (doc: any) => {

            const updateContent = await Promise.all(doc?.data()?.content?.map(async (obj:CasesContentType) => {
                if(obj.type === 'text') {
                    return {
                        type: obj.type,
                        value: await serialize(
                          obj.value as string,
                          {
                              mdxOptions: {
                                  rehypePlugins: [
                                      [rehypeShiki as unknown as any, { highlighter }],
                                      [
                                          remarkRehypeWrap as unknown as any,
                                          {
                                              node: { type: 'mdxJsxFlowElement', name: 'Typography' },
                                              start: ':root > :not(mdxJsxFlowElement)',
                                              end: ':root > mdxJsxFlowElement',
                                          },
                                      ],
                                  ],
                                  remarkPlugins: [remarkGfm  as unknown as any, remarkUnwrapImages],
                              },
                          },
                        ).then((res) => res).catch((e) => '')
                    }
                }
                if(obj.type === 'images') {
                    return {
                        type: obj.type,
                        value: obj.value && await Promise.all(typeof obj.value !== 'string' ? obj.value?.map(async (img: string) => {
                            try {
                                return await getDownloadURL(ref(storage, img))
                            } catch (e) {
                                console.log('Error:', e)
                            }
                            return []
                        }) : [])
                    }
                }
            }))

            return {
                id: doc.id,
                ...doc.data(),
                logo: doc.data()?.logo && await getDownloadURL(ref(storage, doc.data().logo)),
                header_image: doc.data()?.header_image && await getDownloadURL(ref(storage, doc.data().header_image)),
                publish_date: new Date(doc.data().publish_date.seconds * 1000),
                content: updateContent,
                slug: transliterate(doc.data().name)
            }
        }))
        return result.sort((a, b) => b.publish_date.getTime() - a.publish_date.getTime());

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
        slug: e.slug,
        type: e.type,
        description: e.description,
        publish_date: e.publish_date,
        logo: e.logo,
    })).slice(0,3);
}

export const getCases = cache(
  fetchCasesCollection,
  ["getCases"],
  {
      tags: ["getCases"],
  }
)