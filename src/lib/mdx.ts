import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

// async function loadEntries<T extends { date: string }>(
async function loadEntries<T>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            active: undefined,
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  )
  .filter((a) => a.active == true)
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  active?: boolean
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface Service {
  active?: boolean
  sort: number
  title: string
  subtitle?: string
  description: string
  icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
}

export interface CaseStudy {
  active?: boolean
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string | undefined,
  testimonial?: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
      .then(res => res.sort((a, b) => b.date.localeCompare(a.date)))
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
      .then(res => res.sort((a, b) => b.date.localeCompare(a.date)))
}

export function loadServices() {
  return loadEntries<Service>('service', 'service')
      .then(res => res.sort((a, b) => a.sort - b.sort))
}

