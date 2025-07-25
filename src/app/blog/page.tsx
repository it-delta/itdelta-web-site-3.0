import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { getBlogs } from '@/api/getBlogs'
import { BlogType } from '@/types/blogTypes'

export const metadata: Metadata = {
  title: 'Блог',
  description:
    'Будьте в курсе последних новостей отрасли.',
}

export default async function Blog() {
  const blogs:BlogType[] = await getBlogs();
  return (
    <>
      <PageIntro eyebrow="Блог" title="Последние новости и статьи">
        <p>
          Будьте в курсе последних новостей, поскольку наши специалисты
          постоянно находят новые темы чтобы поделиться с Вами.
          {/*
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
*/}
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {blogs.map((blog: BlogType) => (
            <FadeIn key={blog.id}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        {blog.publish_date && (
                          <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                            <time dateTime={blog.publish_date as string}>
                              {new Date(blog.publish_date).toLocaleDateString(
                                'ru-RU',
                                {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                },
                              )}
                            </time>
                          </dd>
                        )}
                        <dt className="sr-only">Автор</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              width={100}
                              height={100}
                              alt=""
                              {...blog.author.image}
                              className="h-12 w-12 object-cover grayscale"
                              unoptimized
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {blog.author.name}
                            </div>
                            <div>{blog.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {blog.description}
                      </p>
                      <Button
                        href={`/blog/${blog?.slug}`}
                        aria-label={`Read more: ${blog.title}`}
                        className="mt-8"
                      >
                        Читать
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
