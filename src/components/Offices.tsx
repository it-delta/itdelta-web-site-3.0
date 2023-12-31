import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Телефон" invert={invert}>
          <a className="cltrk" href="tel:+78005113470">
            +7 800 5113470
          </a>
        </Office>
      </li>
      <li>
        <Office name="Email" invert={invert}>
          <a href="mailto:delta+101@it-delta.ru">
            delta@it-delta.ru
          </a>
        </Office>
      </li>
      <li>
        <Office name="Ростов-на-Дону" invert={invert}>
          ул. Варфоломеева, д.266
          <br />
          4 этаж
        </Office>
      </li>
    </ul>
  )
}
