import rehypeShiki from "@leafac/rehype-shiki";
import remarkGfm from "remark-gfm";
import {remarkRehypeWrap} from "remark-rehype-wrap";

import {doc, getDoc} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {serialize} from "next-mdx-remote/serialize";




import {onAuth} from "@/lib/getCases";
import {CasesContent} from "@/lib/getCases";
const storage = getStorage();

export const getWork = async (workId: string):Promise<any> => {
    await onAuth();
    const caseRef = doc(db, "cases", workId);
    try {
        const work = await getDoc(caseRef);
        let highlighter =  await require('shiki').getHighlighter({
            theme: 'css-variables',
        })

        const mdxSource = await serialize(work.data().content.find((el: CasesContent) => el.type === 'text')?.value, {
            scope: {},
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                    [rehypeShiki, {highlighter}],
                    // [
                    //     remarkRehypeWrap,
                    //     {
                    //         node: {type: 'mdxJsxFlowElement', name: 'Typography'},
                    //         start: ':root > :not(mdxJsxFlowElement)',
                    //         end: ':root > mdxJsxFlowElement',
                    //     },
                    // ],
                ],
            },
            parseFrontmatter: false,
        })

        console.log(mdxSource, 'MDX SOURECE');

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