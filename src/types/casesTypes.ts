import { StaticImageData } from 'next/image'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
export interface CasesContentType {
    type: string,
    value: [] | string
}
export interface CasesType {
    id: string,
    publish_date: Date,
    content?: CasesContentType[],
    contentImages?: [string],
    contentText?: MDXRemoteSerializeResult
    summary?: [],
    header_image?: string,
    logo: string,
    client?: string | undefined,
    tags?: string[],
    type: string,
    name: string,
    slug?: string,
    description: string,
    service?: string,
    testimonial?: {
        image?: {
            src: string | StaticImageData
        }
        content: string,
        author: {
            name: string,
            role: string
        }
    },
    stat_list?: {
        label: string,
        value: string
    }[]
}