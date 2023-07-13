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

  return (
    <li>
      <Link
        onClick={onClick}
        href={href}
      >
        <p
          className={clsx(
            'font-secondary text-lg text-gray transition-colors duration-150 hover:text-white max-md:text-base',
            pathname === href && 'text-white'
          )}
        >
          {text}
        </p>
      </Link>
    </li>
  )
}
