'use client';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export const Content = ({mdxSource}: {mdxSource: MDXRemoteSerializeResult}) =>  {
    return <div className="prose">
        <MDXRemote {...mdxSource}  />
    </div>
}