import { Suspense } from 'react'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { getBlog } from '@/api/getBlogs'
import { BlogType } from "@/types/blogTypes"
import { MDXComponents } from '@/components/MDXComponents'
import { MdxContent } from '@/components/MdxContent'
import { Img } from '@/components/Img'
export default async function BlogDetail({ params: { blogId } }: { params: { blogId: string } }){
  const blog:BlogType | undefined  = await getBlog(blogId);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {blog?.title}
            </h1>
            {blog?.publish_date ? (
              <time
                dateTime={blog.publish_date}
                className="order-first text-sm text-neutral-950"
              >
                {new Date(blog.publish_date).toLocaleDateString('ru-RU', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            ) : ''}
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              {blog?.author.name}, {blog?.author.role}
            </p>
          </header>
        </FadeIn>
        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {blog?.content?.map((obj: any, idx: number) => {
              return (
                <div key={`${obj.type}-idx`}>
                  <MdxContent mdxSource={obj.type === 'text' && obj?.value} />
                  {obj.type === 'images' &&
                    obj?.value?.map((imgUrl: string) => {
                      return <Img key={imgUrl} src={imgUrl} />
                    })}
                </div>
              )
            })}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>
    </Suspense>
  )
}