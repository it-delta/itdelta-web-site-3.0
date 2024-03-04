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

import logoInspire from '@/images/inspire.jpg'

// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
// import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
// import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
// import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
// import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { InboxIcon, UsersIcon,  AcademicCapIcon, BanknotesIcon,
    BookOpenIcon, DocumentIcon, GlobeAltIcon, ReceiptPercentIcon, StarIcon, ArrowRightIcon
  } from '@heroicons/react/24/outline'

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

const features = [
  {
    name: 'Разработка личных кабинетов',
    description:
      'Партнерские порталы, кабинеты для дилеров, системы лояльности - всё что позволит улучшить удобство работы ваших клиентов.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'CRM система',
    description:
      'Прием заявок из различных каналов, стадии обработки сделки, учёт коммуникаций, система задач, уведомлений и прочие инструменты автоматизации отдела продаж.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Учебный портал (LMS)',
    description:
      'Корпоративная система обучения, автоматизация учебных центров. Потоки, группы обучающихся, курсы, уроки. Возможность автоматической и ручной проверки заданий, система рейтингов.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Интернет-магазин',
    description:
      'Создание интернет-магазинов со сложными интеграциями с 1С, системами оплаты и доставки. Работа с дилерами, системы лояльности.',
    href: '#',
    icon: BanknotesIcon,
  },
  {
    name: 'Система бронирования',
    description:
      'Создание системы бронирования для гостиниц, клиник, спортивных и учебных центров. Интеграция с системами лояльности.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Документооборот',
    description:
      'Уменьшите нагрузку на менеджеров, создав кабинет клиента с отображением счетов, оплат, актов, накладных, претензий и прочих необходимых документов. ',
    href: '#',
    icon: DocumentIcon,
  },
  {
    name: 'Маркетплейсы и агрегаторы',
    description:
      'Системы, объединяющие продавцов и покупателей. В настоящее время актуален в узких нишах.',
    href: '#',
    icon: GlobeAltIcon,
  },
  {
    name: 'Системы лояльности',
    description:
      'Система маркетинговых инструментов для увеличения повторных продаж, дополнительные и перекрестные продажи (Up-sell, Cross-sell).',
    href: '#',
    icon: ReceiptPercentIcon,
  },
  {
    name: 'MVP для стартапов',
    description:
      'MVP (minimum viable product) — это минимально жизнеспособный продукт, который позволяет понять насколько интересен пользователям продукт и готовы ли они за него платить.',
    href: '#',
    icon: StarIcon,
  },
]

function Features() {
  return (
    <>
      <Container className="mt-32">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="flex">
                            <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-display font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
                    <feature.icon className="h-6 w-6 text-logoRed" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {/* <a href={feature.href} className="text-sm leading-6">
                      Подробнее <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

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
        <FadeIn className="flex justify-between max-w-4xl">
          <div>
            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] xs:text-5xl sm:text-7xl">
              Цифровизация Вашего бизнеса.
            </h1>
            <div className="mt-6 text-lg text-neutral-600 text font-display">
              <p className='mt-1 flex items-center gap-4'>
                <ArrowRightIcon className="h-4 w-4 text-logoRed shrink-0" aria-hidden="true"/>
                Разрабатываем программное обеспечение для цифровизации бизнес-процессов компаний корпораций.
              </p>
              <p className="mt-1 flex items-center gap-4">
                <ArrowRightIcon className="h-4 w-4 text-logoRed shrink-0" aria-hidden="true"/>
                Личные кабинеты, CRM системы, сложные интеграции.
              </p>
              <p className="mt-1 flex items-center gap-4">
                <ArrowRightIcon className="h-4 w-4 text-logoRed shrink-0" aria-hidden="true"/>
                Десктопные, мобильные и веб-приложения.
              </p>
            </div>
          </div>
          {/*<Image*/}
          {/*    src={logoInspire}*/}
          {/*    alt="Logo Inspire You"*/}
          {/*    className="shrink-0 w-[550px]"*/}
          {/*    unoptimized*/}
          {/*/>*/}
        </FadeIn>
      </Container>

      <Features />

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

      <Services/>

      <ContactSection/>
    </>
  )
}
