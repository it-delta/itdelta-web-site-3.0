import clsx from 'clsx'

export function TagList({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string
}) {
  return (
    <>
      <h3 className="font-[600] text-xl mt-6">{title}</h3>
      <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
        {children}
      </ul>
    </>
  )
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
        className,
      )}
    >
      {children}
    </li>
  )
}
