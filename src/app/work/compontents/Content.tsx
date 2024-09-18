'use client';
import { MDXComponents } from '@/components/MDXComponents'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const Content = ({mdxSource}: {mdxSource: MDXRemoteSerializeResult}) =>  {
    // @ts-ignore
    return <MDXRemote {...mdxSource}  components={MDXComponents}/>
}