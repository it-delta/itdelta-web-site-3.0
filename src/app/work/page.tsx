import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'

import LogoCC from '@/images/clients/cloud-collect/logo-dark.svg'
import LogoOrgOnline from '@/images/clients/org-online/logo-dark.svg'
import logoVMonitor from '@/images/clients/v-monitor/logo-dark.svg'
import logoCultBooking from '@/images/clients/cultbooking/logo-dark.svg'


import { formatDate } from '@/lib/formatDate'
import { getCases } from '@/api/getCases'
import {CasesType} from "@/types/casesTypes";

function CaseStudies({
                       cases,
                     }: {
  cases: Array<CasesType> | undefined
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Проекты
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {cases?.map((caseEl) => (
          <FadeIn key={caseEl?.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    {caseEl?.logo &&  <Image
                      width={100}
                      height={100}
                      src={caseEl?.logo}
                      alt={caseEl?.client ?? ''}
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />}
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseEl?.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseEl?.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      {new Date(caseEl.publish_date).toLocaleDateString("ru-RU", {year: "numeric", month: "long"})}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={`work/${caseEl.slug}`}>{caseEl.name}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                      <p>{caseEl?.description}</p>
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={`work/${caseEl.slug}`}
                      aria-label={`Read case study: ${caseEl.client}`}
                    >
                      Подробнее...
                    </Button>
                  </div>
                  {caseEl?.testimonial && Object.keys(caseEl?.testimonial || {}).length ? (
                          <Blockquote
                            author={caseEl.testimonial.author}
                            className="mt-12"
                          >
                            {caseEl?.testimonial?.content}
                          </Blockquote>
                  ) : null}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['CloudCollect', LogoCC],
  ['OrgOnline', LogoOrgOnline],
  ['V-Monitor', logoVMonitor],
  ['CultBooking', logoCultBooking],
  // ['Phobia', logoPhobia],
  // ['Family Fund', logoFamilyFund],
  // ['Unseal', logoUnseal],
  // ['Mail Smirk', logoMailSmirk],
  // ['Home Work', logoHomeWork],
  // ['Green Life', logoGreenLife],
  // ['Bright Path', logoBrightPath],
  // ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Вы в хорошей компании
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Проекты',
  description:
    'Мы верим в эффективность и максимальное использование наших ресурсов, чтобы обеспечить максимальную ценность для наших клиентов.',
  // 'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let cases:Array<CasesType> | undefined = await getCases()
  return (
    <>
      <PageIntro
        eyebrow="Проекты"
        title="Проверенные решения реальных проблем."
      >
        <p>
          Мы верим в эффективность и максимальное использование наших ресурсов,
          чтобы обеспечить наивысшую ценность для наших клиентов. Основной
          способ сделать это — повторно использовать те знания и опыт, которые
          мы получили в течение последнего десятилетия.
          {/* We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade. */}
        </p>
      </PageIntro>

      <CaseStudies cases={cases} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Дмитрий Дибров', logo: logoVMonitor }}
      >
        Мы обратились в <em>IT-DELTA</em>, потому что нам понравились их прошлые
        работы. Они создали для нас похожий проект в рекордно короткие сроки.
        {/* We approached <em>Studio</em> because we loved their past work. They
        delivered something remarkably similar in record time. */}
      </Testimonial>

      <Clients />

      <ContactSection />
    </>
  )
}
