import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore'
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {serialize} from "next-mdx-remote/serialize";
import {onAuth} from "@/api/onAuth";
import {CasesType, CasesContentType} from "@/types/casesTypes";
import rehypeShiki from '@leafac/rehype-shiki'
// @ts-ignore
import {remarkRehypeWrap} from 'remark-rehype-wrap'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import { formattedDate } from '@/lib/formatDate'
const shiki = require('shiki');
const storage = getStorage();

export const getWork = async (workId: string):Promise<CasesType | any> => {
    await onAuth();
    const caseRef = doc(db, "cases", workId);
    let highlighter = await shiki.getHighlighter({
        theme: 'css-variables',
    })
    try {
        const work:any = await getDoc(caseRef);

        let mdxSource:any = await serialize(
          work
            ?.data()
            ?.content.find((el: CasesContentType) => el.type === 'text')?.value,
          {
            mdxOptions: {
              rehypePlugins: [
                [rehypeShiki as unknown as any, { highlighter }],
                [
                  remarkRehypeWrap,
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
        )
        return {
            ...work.data(),
            publish_date: formattedDate(work.data().publish_date.seconds),
            header_image: await getDownloadURL(ref(storage, work.data().header_image)),
            content: [
                ...work.data()?.content.filter((el: CasesContentType) => el.type !== 'text'),
                {
                    type: "text",
                    value: mdxSource
                }
            ]
        }
    }
    catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`ERROR: ${errorCode} ${errorMessage}`);
    }

}