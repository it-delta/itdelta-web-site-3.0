import { StaticImageData } from 'next/image'

export interface CasesContentType {
    type: string,
    value: [] | string
}
export interface CasesType {
    id: string | number,
    status?: string,
    publish_date: string,
    created_on?: {},
    content?: CasesContentType[],
    summary?: [],
    year?: string,
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
    }
}