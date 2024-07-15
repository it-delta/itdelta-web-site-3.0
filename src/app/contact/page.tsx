import {useId } from 'react'
import { type Metadata } from 'next'
import {GoogleRecapthaForm} from "@/components/GoogleRecapthaForm";
import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'

import { Border } from '@/components/Border'
// import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Контакты
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Вы можете встретиться с нами с помощью телеконференции (Zoom, Yandex и пр.),
        либо посетить наш офис, чтобы пообщаться лично с ответственным менеджером.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Реквизиты
        </h2>

        <div className='mt-5 text-neutral-600 font-normal'>
          <p className="font-semibold"> ООО "Дельта софт сервис" </p>
          <p className="">ИНН/КПП: 6166046226/616601001 </p>
          <p className="">Юр.адрес: Ростов-на-Дону, ул. Штахановского 21/2 - 12 </p>
          <p className="">Почт.адрес: 344003, Ростов-на-Дону, а/я 71 </p>
          <p className="">р/с 40702810615100016856,ОАО АКБ "АВАНГАРД", г. МОСКВА к/с 30101810000000000201, БИК 044525201</p>
        </div>
        
        {/* <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Карьера', 'delta@it-delta.ru'],
            ['Прочее', 'delta@it-delta.ru'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl> */}
      </Border>

     {/* <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Напишите нам
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Карьера', 'delta@it-delta.ru'],
            ['Прочее', 'delta@it-delta.ru'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border> */}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Подписаться
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Оставьте заявку на разработку.',
}

export default function Contact() {
  return (
    <>
    <GoogleRecapthaForm>
      <PageIntro eyebrow="Напишите нам" title="Решаем Ваши бизнес-задачи!">
        <p>Оставьте заявку, мы проконсультируем и оценим проект.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </GoogleRecapthaForm>
    </>
  )
}
