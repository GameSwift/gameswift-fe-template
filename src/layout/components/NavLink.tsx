import clsx from 'clsx'
import { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { Link } from '@/components'

type NavLinkProps = {
  href: LinkProps['href']
  text: string
  onClick: VoidFunction
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => {
  const pathname = usePathname()
  const isDisabled = !Boolean(href)

  return (
    <li>
      <Link
        onClick={isDisabled ? undefined : onClick}
        href={href}
      >
        <p
          className={clsx(
            'relative font-secondary transition-colors duration-150 max-md:text-base',
            isDisabled && 'cursor-not-allowed text-gray',
            pathname === href &&
              'font-bold before:absolute before:inset-y-0 before:-left-2 before:w-0.5 before:bg-primary'
          )}
        >
          {text}
        </p>
      </Link>
    </li>
  )
}
