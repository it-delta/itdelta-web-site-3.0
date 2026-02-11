import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { ContactSection } from '@/components/ContactSection'
import { TagListItem } from '@/components/TagList'
import { StatListItem } from '@/components/StatList'
import { getCases } from '@/api/getCases'
import { CasesType } from '@/types/casesTypes'
import { PageLinks } from '@/components/PageLinks'
import { Img } from '@/components/Img'
import { MdxContent } from '@/components/MdxContent'
import { SliderImage } from '@/components/SliderImage'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cases: CasesType[] = await getCases()
  const theCase = cases.find((work) => work.slug === params.slug)
  const meta = theCase?.meta;

  return {
    title: meta?.title,
    description: meta?.description,
    keywords: meta?.keywors,
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      images: [meta?.ogImage],
    },
  }
}

export default async function WorkDetail({ params: { slug } }: { params: { slug: string } }){
  const cases: CasesType[] = await getCases();
  const work = cases.find((work) => work.slug === slug);
  let mdxSource = work?.contentText
  const moreCases = cases?.filter((caseEl: CasesType) => caseEl.id !== work?.id).slice(0, 2).map((caseEl:CasesType) => {
    return {
      href: caseEl.slug ?? '',
      date: caseEl.publish_date,
      title: caseEl.name,
      description: caseEl.description
    }
  })

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Проект" title={work?.name} centered>
            <p>{work?.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Клиент</dt>
                      <dd>{work?.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Год</dt>
                      <dd>
                        {work?.publish_date &&
                          new Date(work.publish_date).toLocaleDateString(
                            'ru-RU',
                            { year: 'numeric' },
                          )}
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Услуги</dt>
                      <dd>{work?.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            {work?.header_image && (
              <div className="border-y border-neutral-200 bg-neutral-100">
                <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                  <GrayscaleTransitionImage
                    width={100}
                    height={100}
                    src={work.header_image}
                    quality={90}
                    className="w-full"
                    sizes="(min-width: 1216px) 76rem, 100vw"
                    priority
                  />
                </div>
              </div>
            )}
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>
              {work?.content?.map((obj: any, idx: number) => {
                return (
                  <div key={`${obj.type}-idx`}>
                    <MdxContent mdxSource={obj.type === 'text' && obj?.value} />
                    {obj.type === 'images' ? (
                      obj?.value?.length > 1 ? (
                        <SliderImage images={obj.value} />
                      ) : (
                        obj.value.map((imgUrl: string) => {
                          return <Img key={imgUrl} src={imgUrl} />
                        })
                      )
                    ) : null}
                  </div>
                )
              })}
              <MDXComponents.TagList title={'Технологии'}>
                {work?.tags?.map((tag: string) => (
                  <TagListItem key={tag}>{tag}</TagListItem>
                ))}
              </MDXComponents.TagList>
              {work?.testimonial ? (
                <MDXComponents.Blockquote
                  author={work?.testimonial?.author}
                  image={work?.testimonial.image}
                >
                  {work?.testimonial?.content}
                </MDXComponents.Blockquote>
              ) : null}
            </MDXComponents.wrapper>
            {work?.stat_list?.length ? (
              <MDXComponents.StatList>
                {work.stat_list.map(
                  (stat: { label: string; value: string }, index: number) => {
                    return (
                      <StatListItem
                        key={stat.value || index}
                        label={stat.label}
                        value={stat.value}
                      />
                    )
                  },
                )}
              </MDXComponents.StatList>
            ) : null}
          </FadeIn>
        </Container>
      </article>

      {moreCases.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Другие проекты"
          pages={moreCases}
        />
      )}

      <ContactSection />
    </>
  )
}