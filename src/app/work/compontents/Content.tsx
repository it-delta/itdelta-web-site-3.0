'use client';
import { MDXComponents } from '@/components/MDXComponents'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const Content = ({mdxSource}: {mdxSource: MDXRemoteSerializeResult}) =>  {
    return <div className="prose">
        <MDXRemote {...mdxSource}  components={MDXComponents}/>
    </div>
}