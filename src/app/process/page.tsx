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
        </p>
        <p>
          Наша команда аналитиков в течение нескольких недель изучает{' '}
          <strong className="font-black text-neutral-950">бизнес-процессы</strong> компании совместно с руководителями
          и ответственными сотрудниками. На основе полученной информации составляется карта бизнес-процессов,
          пользовательские сценарии и схемы взаимодействия подсистем компании.
          Собранная информация позволяет подготовить список задач для реализации и оценить сроки и стоимость проекта.
        </p>
        <p>
          После завершения полного аудита мы предоставляем подробный{' '}
          <strong className="font-semibold text-neutral-950">план</strong>, сроки и стоимость проекта.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Включено в этап
      </h3>
      <TagList className="mt-4">
        <TagListItem>Сбор требований</TagListItem>
        <TagListItem>Анкетирование</TagListItem>
        <TagListItem>Опросы сотрудников</TagListItem>
        <TagListItem>Документирование</TagListItem>
        <TagListItem>Согласование концепции</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Разработка" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          На этапе Разработки мы воплощаем подготовленный план проекта в реальных структурах баз данных, страницах
          приложения, push- и почтовых уведомлениях, отчетах, системах хранения и прочих элементах современного
          технологического стека веб-разработки.
        </p>
        <p>
          Для реализации проекта создается команда специалистов, состоящая из менеджера проекта, клиентского менеджера,
          фронтэнд и бэкэнд разработчиков, дизайнер, DevOps инженера, дизайнера, верстальщика, тестировщиков.
        </p>
        <p>
          Обычно мы работаем по Agile методологии, поэтому ежедневно контактируем, а также регулярно проводим
          конференции со специалистами клиента для уточнения планов, детализации задач и сдачи этапов работ.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Антон Петровский', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Они так регулярно публиковали обновления о ходе работы, что мы начали думать, что они автоматизированы! :)
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Запуск" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          При приближении к окончанию этапа Разработки мы начинаем пилотное {' '}
          <strong className="font-semibold text-neutral-950">тестирование</strong> проекта с привлечением специалистов клиента.
          Параллельно создаётся система автоматизированых сквозных (end-to-end) тестов для комплексного тестирования приложения.
        </p>
        <p>
          Также происходит развертывание приложения на боевых серверах, а также нагрузочное тестирование, в зависимости от планируемой нагрузки.
          Подготавливается система{' '}<strong className="font-semibold text-neutral-950">резервного копирования</strong>,
          проверяется{' '}<strong className="font-semibold text-neutral-950">информационная безопасность</strong>.
        </p>
      <p>
        После запуска проекта в боевой режим, мы продолжаем контролировать работу приложения с помощью специальных
        систем{' '}<strong className="font-semibold text-neutral-950">логирования</strong> и анализа действий пользователей,
        чтобы оперативно выявить и устранить возможные проблемы.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Включено в этап
      </h3>
      <List className="mt-8">
        <ListItem title="Тестирование">
          Ручное и автоматизированное тестирование приложения, включая unit, integrity и end-to end тесты.
        </ListItem>
        <ListItem title="Инфраструктура">
          Размещение приложения как на серверах клиента, так и на надежных облачных серверах.
        </ListItem>
        <ListItem title="Поддержка">
          Контроль работы приложения, анализ лог файлов для выявления ошибок и оперативного исправления. Устранение
          узких мест производительности.
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
          используя как зарекомендовавшие себя решения, проверенные на множестве проектов, так и инновационные решения,
          позволяющие совершить прорыв в эффективности разработки.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Внимание к деталям">
            Подробный и тщательный анализ автоматизируемых процессов для нахождения максимально удобного для пользователей варианта реализации.
          </GridListItem>
          <GridListItem title="Эффективность">
            Выбор оптимальных решений для сокращения затрат на реализацию, в том числе повторное использование кода и экспертиза прошлых проектов.
          </GridListItem>
          <GridListItem title="Гибкость">
            У каждого бизнеса есть уникальные потребности, и наша самая большая задача —
            воплотить эти потребности используя наши компетенции и экспертизу.
          </GridListItem>
          <GridListItem title="Честность">
            Мы прозрачны во всех наших процессах, предоставляя подробные отчеты, а также систему визуального контроля работы специалистов.
          </GridListItem>
          <GridListItem title="Преданность">
            Мы развиваем долгосрочные отношения с нашими клиентами, которые выходят за рамки
            простой разработки продукта и позволяют сотрудничать на протяжении десятилетий.
          </GridListItem>
          <GridListItem title="Инновационность">
            Технологический ландшафт постоянно развивается, и мы тоже.
            Мы постоянно ищем новые технологии для использования в проектах.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Процессы',
  description:
    'Мы верим в эффективность и максимальное использование наших ресурсов, чтобы обеспечить наивысшую ценность для наших клиентов.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Процессы" title="Как мы работаем">
        <p>
          Мы верим в эффективность и максимальное использование наших ресурсов, чтобы обеспечить наивысшую ценность для наших клиентов.
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
