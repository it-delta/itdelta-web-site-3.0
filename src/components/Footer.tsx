import Link from 'next/link'

import {Container} from '@/components/Container'
import {FadeIn} from '@/components/FadeIn'
import {Logo} from '@/components/Logo'

const navigation = [
    {
        title: 'Проекты',
        links: [
            {title: 'Мониторинг', href: '/work/onlain-servis-monitoringa-transporta'},
            {title: 'CloudCollect', href: '/work/onlain-servis-dlya-vziskaniya-zadolzhennosti'},
            {title: 'Cultbooking', href: '/work/agregator-bronirovaniya-otelei'},
            {
                title: (
                    <>
                        Смотреть всё <span className="text-logoRed" aria-hidden="true">&rarr;</span>
                    </>
                ),
                href: '/work',
            },
        ],
    },
    {
        title: 'Услуги разработки',
        links: [
            {title: 'Личные кабинеты', href: '/service/development-of-personal-accounts'},
            {title: 'Интернет-магазины', href: '/service/ecommerce-development'},
            {title: 'Учебные порталы', href: '/service/lms-system-development'},
            {
                title: (<>Смотреть всё <span className="text-logoRed" aria-hidden="true">&rarr;</span></>),
                href: '/service',
            },

        ],
    },
    {
        title: 'Компания',
        links: [
            {title: 'О нас', href: '/about'},
            {title: 'Услуги', href: '/service'},
            {title: 'Процессы', href: '/process'},
            {title: 'Контакты', href: '/contact'},
        ],
    },
    // {
    // title: 'Connect',
    // links: socialMediaProfiles,
    // },
]

function Navigation() {
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {navigation.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                        <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-sm text-neutral-700">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-neutral-950"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            />
        </svg>
    )
}

function NewsletterForm() {
    return (
        <form className="max-w-sm">
            <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                {/* Sign up for our newsletter */}
                Подпишитесь на наши новости
            </h2>
            <p className="mt-4 text-sm text-neutral-700">
                Подпишитесь, чтобы получать последние новости, статьи и вдохновение.
                {/* Subscribe to get the latest design news, articles, resources and
        inspiration. */}
            </p>
            <div className="relative mt-6">
                <input
                    type="email"
                    placeholder="e-mail"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                        type="submit"
                        aria-label="Submit"
                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                    >
                        <ArrowIcon className="w-4"/>
                    </button>
                </div>
            </div>
        </form>
    )
}

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <Navigation/>
                    <div className="flex lg:justify-end">
                        <NewsletterForm/>
                    </div>
                </div>
                <div
                    className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                    <Link href="/" aria-label="Home">
                        <Logo className="h-8" fillOnHover/>
                    </Link>
                    <div className="">
                      <Link
                        className="text-sm text-neutral-700 transition after:inline-block after:h-[14px] after:mt-1 after:mx-2 after:w-[1px] after:bg-neutral-700 after:content-[''] hover:text-neutral-950"
                        href={'/policies/agreement.pdf'}
                        target="_blank"
                      >
                      Политика конфиденциальности
                      </Link>
                      <Link
                        className="text-sm text-neutral-700 transition hover:text-neutral-950"
                        href={'/policies/agreement.pdf'}
                        target="_blank"
                      >
                        Согласие на обработку персональных данных
                      </Link>
                    </div>
                    <p className="text-sm text-neutral-700">
                        © IT-DELTA Agency. {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    )
}
