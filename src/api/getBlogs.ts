import {onAuth} from "@/api/onAuth";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import { unstable_cache as cache } from "next/cache";
import { serialize } from 'next-mdx-remote/serialize'
import rehypeShiki from '@leafac/rehype-shiki'
// @ts-ignore
import { remarkRehypeWrap} from 'remark-rehype-wrap';
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import { BlogContentType, BlogType } from '@/types/blogTypes'
import { CasesType } from '@/types/casesTypes'
import { getCases } from '@/api/getCases'
import { transliterate } from '@/lib/transliterate'
const shiki = require('shiki');

const storage = getStorage();

const fetchBlogCollection = async (): Promise<BlogType[]> => {
  await onAuth();
  let highlighter = await shiki.getHighlighter({
    theme: 'css-variables',
  })
  try {
    const blogsRef = collection(db, "blogs", "");
    const blogsQuery = query(blogsRef, where('active', '==', true))
    const blogsSnap = await getDocs(blogsQuery);

    const result:BlogType[] = await Promise.all(blogsSnap.docs.map(async (doc: any) => {

      const updateContent = await Promise.all(doc?.data()?.content?.map(async (obj:BlogContentType) => {
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
        slug: transliterate(doc.data().title),
        publish_date: new Date(doc.data().publish_date.seconds * 1000),
        content: updateContent
      }
    }))
    return result.sort((a, b) => {
      const dateA = a?.publish_date ? new Date(a.publish_date).getTime() : 0;
      const dateB = b?.publish_date ? new Date(b.publish_date).getTime() : 0;
      return dateB - dateA;
    });

  } catch(error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`ERROR: ${errorCode} ${errorMessage}`);
  }
  return [];
}

export const getBlog = async (slug:string):Promise<BlogType | undefined> => {
  const blogs: BlogType[] = await getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}
export const getBlogs = cache(
  fetchBlogCollection,
  ["getBlogs"],
  {
    tags: ["getBlogs"],
  }
)