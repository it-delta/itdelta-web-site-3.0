'use client';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export default function Content({mdxSource}: {mdxSource: MDXRemoteSerializeResult}) {
    return <MDXRemote {...mdxSource} />
}