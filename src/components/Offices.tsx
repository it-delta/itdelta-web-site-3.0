import clsx from 'clsx'

import { siteConfig } from '@/config/site'

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
  const { phone, email, address } = siteConfig.contacts

  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Телефон" invert={invert}>
          <a className="cltrk" href={phone.href}>
            {phone.label}
          </a>
        </Office>
      </li>
      <li>
        <Office name="Email" invert={invert}>
          <a href={email.href}>{email.label}</a>
        </Office>
      </li>
      <li>
        <Office name={address.label} invert={invert}>
          {address.lines.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </Office>
      </li>
    </ul>
  )
}
