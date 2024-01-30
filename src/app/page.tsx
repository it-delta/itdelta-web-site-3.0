import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import LogoCCDark from '@/images/clients/cloud-collect/logo-dark.svg'
import LogoCCLight from '@/images/clients/cloud-collect/logo-light.svg'
import LogoOrgOnlineLight from '@/images/clients/org-online/logo-light.svg'
import logoVMonitor from '@/images/clients/v-monitor/logo-light.svg'
import logoCultBooking from '@/images/clients/cultbooking/logo-light.svg'

// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
// import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
// import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
// import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
// import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['CloudCollect', LogoCCLight],
  ['OrgOnline', LogoOrgOnlineLight],
  ['V-Monitor', logoVMonitor],
  ['CultBooking', logoCultBooking],
  // ['Mail Smirk', logoMailSmirk],
  // ['Home Work', logoHomeWork],
  // ['Green Life', logoGreenLife],
  // ['Bright Path', logoBrightPath],
  // ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {/* We’ve worked with hundreds of amazing people */}
            Мы работаем с множеством замечательных людей
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        // title="Harnessing technology for a brighter future"
        title="Использование цифровых технологий для больших достижений"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Мы верим, что технологии - это ответ на величайшие мировые проблемы.
          С помощью цифровизации мы сможем преодолеть множество преград и выйти на новые горизонты развития.
          {/* We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation. */}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-logoRed " aria-hidden="true">
                    /
                  </span>
                  <span>Проект</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Услуги"
        title="Анализ, проектирование, реализация, поддержка."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Мы производим полный цикл работ, начиная от анализа предметной области, 
          заканчивая поддержкой и развитием проекта в течение многих лет.
          {/* As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those. */}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Веб-разработка">
              Разрабатываем привлекательные, быстрые и масштабируемые приложения
              для различных сфер бизнеса.
              {/* We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere. */}
            </ListItem>
            <ListItem title="Разработка приложений">
              Команда разработчиков обладает опытом в создании приложений с использованием ряда
              современных фреймворков: React, Node.js, Laravel, Bitrix и других
            </ListItem>
            <ListItem title="E-commerce системы">
              Большой опыт в разработке интернет-магазинов с десятками тысяч товаров.
              Интеграции с 1С:Предприятие, CRM системами, OZON, WB, системами оплаты и доставки.
            </ListItem>
            <ListItem title="Автоматизация бизнес-процессов компаний">
              Создания личных кабинетов клиентов/сотрудников для автоматизации процессов отделов
              продаж, производства, HR и других.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] xs:text-5xl sm:text-7xl">
            Цифровизация Вашего бизнеса.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Разрабатываем программное обеспечение для цифровизации бизнес-процессов компаний/корпораций.
            Личные кабинеты, CRM системы, сложные интеграции. Десктопные, мобильные и веб-приложения.
            {/* We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs. */}
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'CloudCollect', logo: LogoCCDark }}
      >
        После запуска интеграции с учетными системами, в прошлом месяце мы получили в 10 раз больше
        клиентов чем в предыдущем. Это максимальное количество за 7 лет работы компании.

        {/* The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs. */}
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
