import Image, { type ImageProps, StaticImageData } from 'next/image'
import clsx from 'clsx'

import { Border } from '@/components/Border'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

function BlockquoteWithImage({
  author,
  children,
  className,
  image,
}: {
  author: { name: string; role: string }
  children: React.ReactNode
  className?: string
  image: ImagePropsWithOptionalAlt,
}) {
  return (
    <figure
      className={clsx(
        'grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16',
        className,
      )}
    >
      <blockquote className="col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2">
        {typeof children === 'string' ? <p>{children}</p> : children}
      </blockquote>
      <div className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl">
        <Image
          alt=""
          width={100}
          height={100}
          {...image}
          unoptimized
          sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
          className="h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"
        />
      </div>
      <figcaption className="text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base">
        <span className="font-semibold">{author.name}</span>
        <span className="hidden font-semibold sm:inline">, </span>
        <br className="sm:hidden" />
        <span className="sm:font-semibold">{author.role}</span>
      </figcaption>
    </figure>
  )
}

function BlockquoteWithoutImage({
  author,
  children,
  className,
}: {
  author: { name: string; role: string }
  children: React.ReactNode
  className?: string
}) {
  return (
    <Border position="left" className={clsx('pl-8', className)}>
      <figure className="text-sm">
        <blockquote className="text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']">
          {typeof children === 'string' ? <p>{children}</p> : children}
        </blockquote>
        <figcaption className="mt-6 font-semibold text-neutral-950">
          {/*{author.name}, {author.role}*/}
        </figcaption>
      </figure>
    </Border>
  )
}

export function Blockquote(
  props:
    | React.ComponentPropsWithoutRef<typeof BlockquoteWithImage>
    | (React.ComponentPropsWithoutRef<typeof BlockquoteWithoutImage> & {
        image?: undefined,
      }),
) {
  if (props.image) {
    return <BlockquoteWithImage {...props} />
  }

  return <BlockquoteWithoutImage {...props} />
}
