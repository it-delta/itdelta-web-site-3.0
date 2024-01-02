import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-logoRed before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              // className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Аналитика" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Мы тесно сотрудничаем с нашими клиентами, чтобы понять их{' '}
          <strong className="font-semibold text-neutral-950">потребности</strong> и цели,
          погружаясь в их повседневную деятельность, чтобы понять, что движет их бизнесом.

          {/*We work closely with our clients to understand their{' '}*/}
          {/*<strong className="font-semibold text-neutral-950">needs</strong> and*/}
          {/*goals, embedding ourselves in their every day operations to understand*/}
          {/*what makes their business tick.*/}
        </p>
        <p>
          Наша команда аналитиков-детективов в течение нескольких недель следит за руководителями компании,
          в то время как наши клиентские менеджеры сосредоточены на разборке их мусора.
          Затем наши эксперты по безопасности с помощью социальной инженерии выполняют взломы,
          чтобы получить доступ к их{' '}
          <strong className="font-semibold text-neutral-950">бизнес</strong>-аккаунтам,
          передавая эту информацию нашей команде судебно-бухгалтерского учета.
{/*
          Our team of private investigators shadow the company director’s for
          several weeks while our account managers focus on going through their
          trash. Our senior security experts then perform social engineering
          hacks to gain access to their{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          accounts — handing that information over to our forensic accounting
          team.
*/}
        </p>
        <p>
          После завершения полного аудита мы предоставляем подробный{' '}
          <strong className="font-semibold text-neutral-950">план</strong> и, что более важно, бюджет.
{/*
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
*/}
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Включено в этап
        {/*Included in this phase*/}
      </h3>
      <TagList className="mt-4">
        <TagListItem>Сбор требований</TagListItem>
        <TagListItem>Анкетирование</TagListItem>
        <TagListItem>Опросы сотрудников</TagListItem>
        <TagListItem>Документирование</TagListItem>
        <TagListItem>Согласование концепции</TagListItem>
        {/*<TagListItem>Forensic audit</TagListItem>*/}
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Разработка" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          На этапе Аналитики мы разрабатываем комплексную дорожную карту для проекта и начинаем работать над её детализацией.
          Дорожная карта — это запутанная путаница технической чепухи, призванная затянуть проект как можно дольше.
        </p>
        <p>
          Каждому клиенту назначается менеджер по работе с ключевыми клиентами, который поддерживает каналы связи открытыми и скрывает фактический ход проекта.
          Они выступают в качестве буфера между непрекращающимся ворчанием клиента и командой разработчиков, которая усердно
          работает над поиском кода для повторного использования в проектах с открытым исходным кодом.
        </p>
        <p>
          Наши менеджеры по работе с клиентами обучены отвечать на электронные письма клиентов только после 21:00, через несколько дней после первого письма.
          Это усиливает общее впечатление, что мы очень заняты, и отговаривает клиентов просить об изменениях.
        </p>
{/*        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. The roadmap is an
          intricately tangled mess of technical nonsense designed to drag the
          project out as long as possible.
        </p>
        <p>
          Each client is assigned a key account manager to keep lines of
          communication open and obscure the actual progress of the project.
          They act as a buffer between the client’s incessant nagging and the
          development team who are hard at work scouring open source projects
          for code to re-purpose.
        </p>
        <p>
          Our account managers are trained to only reply to client emails after
          9pm, several days after the initial email. This reinforces the general
          aura that we are very busy and dissuades clients from asking for
          changes.
        </p>*/}
      </div>

      <Blockquote
        author={{ name: 'Антон Петровский', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio так регулярно публиковала обновления о ходе работы, что мы начали думать, что они автоматизированы!
        {/*Studio were so regular with their progress updates we almost began to*/}
        {/*think they were automated!*/}
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Запуск" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Примерно в середине этапа Разработки мы отодвигаем каждый проект на 6 недель из-за изменения {' '}
          <strong className="font-semibold text-neutral-950">
            требований
          </strong>.
          Это позволяет нам увеличить бюджет в последний раз перед запуском.
{/*          About halfway through the Build phase, we push each project out by 6
          weeks due to a change in{' '}
          <strong className="font-semibold text-neutral-950">
            requirements
          </strong>
          . This allows us to increase the budget a final time before launch.*/}
        </p>
        <p>
          Несмотря на то, что в основном используются готовые компоненты, большая часть{' '}
          <strong className="font-semibold text-neutral-950">прогресса</strong>{' '}
          проекта происходит в последние 24 часа.
          Время разработки, отведенное каждому клиенту, фактически тратится на создание демо-версий дополненной реальности, которые становятся вирусными в Твиттере.

{/*          Despite largely using pre-built components, most of the{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          on each project takes place in the final 24 hours. The development
          time allocated to each client is actually spent making augmented
          reality demos that go viral on Twitter.*/}
        </p>
        <p>
          Мы гарантируем, что основные страницы сайта будут{' '}
          <strong className="font-semibold text-neutral-950">
            полностью функциональны
          </strong>{' '} при запуске — вспомогательные страницы, конечно же, будут оболочками lorem ipusm,
          которые будут обновляться в рамках нашего непомерного гонорара за{' '}
          <strong className="font-semibold text-neutral-950">
            техническую поддержку
          </strong>.

{/*          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          retainer.*/}
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Включено в этап
      </h3>
      <List className="mt-8">
        <ListItem title="Тестирование">
          Наши проекты всегда имеют 100%-ное покрытие тестами, и это было бы впечатляюще,
          если бы наши тесты не были такими дырявыми, как сито.
          {/*Our projects always have 100% test coverage, which would be impressive*/}
          {/*if our tests weren’t as porous as a sieve.*/}
        </ListItem>
        <ListItem title="Инфраструктура">
          Чтобы обеспечить надежность, мы используем только лучшие дроплеты Digital Ocean,
          которые можно купить за 4 доллара в месяц.
          {/*To ensure reliability we only use the best Digital Ocean droplets that*/}
          {/*$4 a month can buy.*/}
        </ListItem>
        <ListItem title="Поддержка">
          Поскольку мы храним ключи API для каждого критически важного сервиса вашего бизнеса,
          вы можете рассчитывать на пожизненные поддержку и счета на оплату от нас.
          {/*Because we hold the API keys for every critical service your business*/}
          {/*uses, you can expect a lifetime of support, and invoices, from us.*/}
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Ценности"
        title="Баланс между надежностью и инновациями"
      >
        <p>
          Мы стремимся быть в авангарде новых тенденций и технологий,
          полностью игнорируя их и создавая тот старый проект PHP, который нам удобно использовать.
          Мы придерживаемся наших основных ценностей, чтобы оправдать это решение.
{/*
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
*/}
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Внимание к деталям">
            Первая часть любого партнерства — заставить нашего дизайнера разместить ваш логотип в нашем шаблоне.
            Второй шаг — заставить их раскрасить цвета.
{/*
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
*/}
          </GridListItem>
          <GridListItem title="Эффективность">
            Мы гордимся тем, что никогда не пропускаем сроки, что легко,
            поскольку большая часть работы была выполнена много лет назад.
{/*            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.*/}
          </GridListItem>
          <GridListItem title="Гибкость">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Честность">
            У каждого бизнеса есть уникальные потребности, и наша самая большая задача —
            воплотить эти потребности во что-то, что мы уже создали.
            {/*We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.*/}
          </GridListItem>
          <GridListItem title="Преданность">
            Мы развиваем долгосрочные отношения с нашими клиентами, которые выходят за рамки
            простой разработки продукта и позволяют нам выставлять им счета на протяжении десятилетий.
            {/*We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.*/}
          </GridListItem>
          <GridListItem title="Инновационность">
            Технологический ландшафт постоянно развивается, и мы тоже.
            Мы постоянно ищем новые проекты с открытым исходным кодом для клонирования.
            {/*The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.*/}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Процессы" title="Как мы работаем">
        <p>
          Мы верим в эффективность и максимальное использование наших ресурсов, чтобы обеспечить максимальную ценность для наших клиентов.
          Основной способ сделать это — использовать опыт тех проектов, которые мы разрабатывали в течение последнего десятилетия.
          {/*We believe in efficiency and maximizing our resources to provide the*/}
          {/*best value to our clients. The primary way we do that is by re-using*/}
          {/*the same five projects we’ve been developing for the past decade.*/}
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
