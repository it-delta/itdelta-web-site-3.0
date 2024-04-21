import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadServices } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Услуги',
  description:
    'Услуги веб-разработки и не только.',
}

export default async function Services() {
  let services = await loadServices()

  return (
    <>
      <PageIntro eyebrow="Услуги" title="Что мы делаем?">
        <p>
          Разрабатываем веб-приложения, порталы, личные кабинеты для автоматизации бизнес-процессов компаний.
{/*
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks services.
*/}
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {services.map((service) => (
            <FadeIn key={service.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={service.href}>{service.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={service.date}>
                            {formatDate(service.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Автор</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt=""
                              {...service.author.image}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {service.author.name}
                            </div>
                            <div>{service.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {service.description}
                      </p>
                      <Button
                        href={service.href}
                        aria-label={`Read more: ${service.title}`}
                        className="mt-8"
                      >
                        Подробнее...
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
