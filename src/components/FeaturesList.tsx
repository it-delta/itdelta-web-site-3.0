import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import Image from "next/image";

export function FeaturesList({
                                 title,
                                 children,
                                 className,
                             }: {
    title: string,
    children: React.ReactNode
    className?: string
}) {
    return (
        <>
            <h2>
                <span className="mt-16 mb-8 block font-display tracking-tight text-xl text-neutral-950">{title}</span>
            </h2>
            <FadeInStagger className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {children}
            </FadeInStagger>
        </>
    )
}

export function FeatureListItem({
                                    title,
                                    icon: Icon,
                                    image,
                                    children,
                                    href,
                                    className,
                                }: {
    title: string
    icon?: React.ReactNode
    image?:string
    children: React.ReactNode
    href?: string
    className?: string
}) {
    return (
        <FadeIn key={title} className="flex">
            <div className="mb-2 mr-3 flex h-8 w-16 items-center justify-center rounded-lg">
                {image && (
                    <Image
                        alt=""
                        {...image}
                        className="h-6 w-6 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    />
                )}
                {Icon && (
                    <Icon className="h-6 w-6 text-logoRed" aria-hidden="true"/>
                )}
            </div>
            <div>
                <dt className="text-base font-display font-semibold leading-7 text-gray-900">
                    {title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <div className="flex-auto">{children}</div>

                    {href && (
                        <div className="mt-6">
                            <a href={title} className="text-sm leading-6 hover:text-logoRed">
                                Подробнее <span className="text-logoRed" aria-hidden="true">→</span>
                            </a>
                        </div>
                    )}

                </dd>
            </div>
        </FadeIn>
    )
}
