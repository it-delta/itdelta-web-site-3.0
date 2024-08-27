import {doc, getDoc} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {serialize} from "next-mdx-remote/serialize";
import {onAuth} from "@/lib/getCases";
import {CasesContent} from "@/lib/getCases";
import rehypeShiki from '@leafac/rehype-shiki'
import {remarkRehypeWrap} from 'remark-rehype-wrap'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
const shiki = require('shiki');
const storage = getStorage();

export const getWork = async (workId: string):Promise<any> => {
    await onAuth();
    const caseRef = doc(db, "cases", workId);
    let highlighter = await shiki.getHighlighter({
        theme: 'css-variables',
    })
    try {
        const work = await getDoc(caseRef);
        const mdxSource = await serialize(work.data().content.find((el: CasesContent) => el.type === 'text')?.value, {
            mdxOptions: {
                rehypePlugins: [
                    [rehypeShiki, { highlighter }],
                    [
                        remarkRehypeWrap,
                        {
                            node: { type: 'mdxJsxFlowElement', name: 'Typography' },
                            start: ':root > :not(mdxJsxFlowElement)',
                            end: ':root > mdxJsxFlowElement',
                        },
                    ],
                ],
                remarkPlugins: [remarkGfm, remarkUnwrapImages],
            }
        })


        return {
            ...work.data(),
            header_image: await getDownloadURL(ref(storage, work.data().header_image)),
            content: [
                ...work.data().content.filter((el: CasesContent) => el.type !== 'text'),
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