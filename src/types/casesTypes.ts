import { StaticImageData } from 'next/image'

export interface CasesContentType {
    type: string,
    value: [] | string
}
export interface CasesType {
    id: string,
    publish_date: Date,
    content?: CasesContentType[],
    contentImages?: [string],
    contentText?: [string]
    summary?: [],
    header_image?: string,
    logo: string,
    client?: string | undefined,
    tags?: string[],
    type: string,
    name: string,
    description: string,
    service?: string,
    testimonial?: {
        image?: {
            src?: string | StaticImageData
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