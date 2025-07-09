import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import clsx from 'clsx'

export const Img = ({
                      className,
                      ...props
                    }: React.ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) => {
  return (
    <div
      className={clsx(
        'group isolate my-10 overflow-hidden rounded-2xl bg-neutral-100 max-sm:-mx-6',
        className,
      )}
    >
      <GrayscaleTransitionImage
        {...props}
        sizes="(min-width: 768px) 42rem, 100vw"
        className="aspect-[16/10] w-full object-cover"
      />
    </div>
  )
}