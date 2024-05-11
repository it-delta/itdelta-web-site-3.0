import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Service, type MDXEntry, loadServices } from '@/lib/mdx'

export default async function ServiceArticleWrapper({
  service,
  children,
}: {
  service: MDXEntry<Service>
  children: React.ReactNode
}) {
  let allArticles = await loadServices()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== service)
    .slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {service.title}
            </h1>
            <time
              dateTime={service.date}
              className="order-first text-sm text-neutral-950"
            >
              {/*{formatDate(service.date)}*/}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              {/*{service.author.name}, {service.author.role}*/}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Другие услуги"
          pages={moreArticles}
          showDate={false}
        />
      )}

      <ContactSection />
    </>
  )
}
