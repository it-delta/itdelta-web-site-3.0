import Link from 'next/link'
import clsx from 'clsx'
// import { Ring } from 'react-spinners-css';
import { ClipLoader } from "react-spinners";

type ButtonProps = {
  invert?: boolean
  loading?: boolean,
  disabled?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  loading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button
          className={className}
          disabled={disabled}
          {...props}
      >
        {/*{inner} {loading && <Ring className="ml-2 top-px" color={'white'} size={20} /> }*/}
        {inner} {loading && <ClipLoader
          // color={color}
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
      /> }
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
