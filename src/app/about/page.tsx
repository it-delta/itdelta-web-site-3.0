import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageTeam1 from '@/images/team/max.jpg'
import imageTeam2 from '@/images/team/lev.jpg'
import imageTeam3 from '@/images/team/arina.jpg'
import imageTeam4 from '@/images/team/nik.jpg'
import imageTeam5 from '@/images/team/vova.jpg'
import imageTeam6 from '@/images/team/nastya.jpg'
import imageTeam7 from '@/images/team/ruslan.png'
import imageTeam8 from '@/images/team/raffi.png'
import imageTeam9 from '@/images/team/rifat.jpg'
import allTeam from '@/images/team/all-team.jpg'
import { loadArticles } from '@/lib/mdx'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Почему выбирают нас?"
        title="Принципы, которым мы следуем"
        invert
      >
        <p>
          Мы - команда единомышленников, разделяющих общие ценности.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Оперативность" invert><br />
            Всегда на связи, оперативно отвечаем на запросы, быстро соображаем.
          </GridListItem>
          <GridListItem title="Результат" invert><br />
            Это главное. Никогда не забываем ДЛЯ ЧЕГО мы делаем то, что мы делаем.
          </GridListItem>
          <GridListItem title="Доверие" invert><br />
            Открытость, доброжелательность, поддержка и помощь.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Команда',
    people: [
      {
        name: 'Максим',
        role: 'CEO',
        image: { src: imageTeam1 },
      },
      {
        name: 'Лев',
        role: 'Account Manager',
        image: { src: imageTeam2 },
      },
      {
        name: 'Арина',
        role: 'Project Manager',
        image: { src: imageTeam3 },
      },
      {
        name: 'Никита',
        role: 'Team Lead',
        image: { src: imageTeam4 },
      },
      {
        name: 'Владимир',
        role: 'Team Lead',
        image: { src: imageTeam5 },
      },
      {
        name: 'Анастасия',
        role: 'HR',
        image: { src: imageTeam6 },
      },
      {
        name: 'Руслан',
        role: 'Front End',
        image: { src: imageTeam7 },
      },
      {
        name: 'Раффи',
        role: 'Front End',
        image: { src: imageTeam8 },
      },
      {
        name: 'Рифат',
        role: 'Back End',
        image: { src: imageTeam9 },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <GrayscaleTransitionImage
                            width={100}
                            height={100}
                            {...person.image}
                            quality={100}
                            className="w-full h-[432px] object-cover rounded-3xl"
                            sizes="(min-width: 1030px) 76rem, 100vw"
                            priority
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
      <div className="mt-36">
        <FadeIn>
          <GrayscaleTransitionImage
            width={100}
            height={100}
            src={allTeam}
            quality={100}
            className="w-full rounded-3xl"
            sizes="(min-width: 1030px) 76rem, 100vw"
            priority
          />
        </FadeIn>
        </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'О нас',
  description:
    'История, принципы, ценности компании.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="О нас" title="Глубокое погружение в бизнес клиента">
        <p>
          Мы верим, что без глубокого понимания бизнес-процессов клиента
          невозможно не только оценить проект, но и создать действительно полезный продукт.
          {/*We believe that our strength lies in our collaborative approach, which*/}
          {/*puts our clients at the center of everything we do.*/}
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Мы начали в 2011 году с разработки сайтов. Стали Золотыми партнерами 1С-Битрикс, выполнили множество проектов
            корпоративных веб-сайтов и интернет-магазинов.
            {/*Studio was started by three friends who noticed that developer*/}
            {/*studios were charging clients double what an in-house team would*/}
            {/*cost. Since the beginning, we have been committed to doing things*/}
            {/*differently by charging triple instead.*/}
          </p>
          <p>
            C 2019 года переключились на разработку корпоративного ПО, вышли на зарубежный рынок.
            Выполнено множество проектов, поработали как со стартапами, так и с крупными компаниями.
          </p>
          <p>
            В настоящее время ({new Date().toLocaleDateString('ru-RU', { year: 'numeric'})} год) разрабатываем внутреннее корпоративное ПО для автоматизации средних и крупных компаний.
            Мы&nbsp; - команда профессионалов с большим опытом в реализации задач бизнеса.
            {/*В Studio мы больше, чем просто коллеги — мы семья. Это означает, что мы платим очень мало и ожидаем,*/}
            {/*что люди будут работать допоздна. Мы хотим, чтобы наши сотрудники полностью отдавались работе.*/}
            {/*Взамен мы просто просим их оставаться там как минимум до 18:30.*/}
            {/*At Studio, we’re more than just colleagues — we’re a family. This*/}
            {/*means we pay very little and expect people to work late. We want our*/}
            {/*employees to bring their whole selves to work. In return, we just*/}
            {/*ask that they keep themselves there until at least 6:30pm.*/}
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Сотрудников" />
          <StatListItem value="56" label="Довольных клиентов" />
          <StatListItem value="$2M" label="Оплаченных счетов" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Из блога"
        // intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        intro="Наша команда опытных дизайнеров и разработчиков думает только об одном: работайте над своими идеями, чтобы вызвать улыбку на лицах ваших пользователей по всему миру. От проведения Бренд-Спринтов до UX-дизайна."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
