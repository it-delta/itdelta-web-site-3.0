import {Container} from "./Container";
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import { BoltIcon, CakeIcon, FaceSmileIcon} from '@heroicons/react/24/outline'

const items = [
    {
        name: 'Оперативность',
        description: 'Реагируем на ваши запросы настолько быстро, насколько это возможно',
        href: '#',
        icon: BoltIcon,
    },
    {
        name: 'Результативность',
        description: 'Добиваемся результата, несмотря на препятствия и сложности',
        href: '#',
        icon: CakeIcon,
    },
    {
        name: 'Доверие',
        description: 'Поддерживаем открытые, доверительные, положительные взаимоотношения',
        href: '#',
        icon: FaceSmileIcon,
    },
];

export const Principles = () => (
    <>
        <h2><span className="mt-16 block font-display tracking-tight text-2xl text-neutral-950">Наши принципы</span></h2>
        <Container className="mb-16 mt-6 lg:px-3">
            <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {items.map((feature) => (
                    <FadeIn key={feature.name} className="flex">
                        <div key={feature.name} className="flex flex-col">
                            <dt className="text-base font-display font-semibold leading-7 text-gray-900">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
                                    <feature.icon className="h-6 w-6 text-logoRed" aria-hidden="true"/>
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{feature.description}</p>
                                {/*<p className="mt-6">*/}
                                    {/* <a href={feature.href} className="text-sm leading-6">
                      Подробнее <span aria-hidden="true">→</span>
                    </a> */}
                                {/*</p>*/}
                            </dd>
                        </div>
                    </FadeIn>
                ))}
            </FadeInStagger>
        </Container>
    </>
);
