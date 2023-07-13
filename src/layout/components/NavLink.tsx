import { LinkProps } from 'next/link'
import { Link } from '@/components'

type NavLinkProps = {
  href: LinkProps['href']
  text: string
  onClick: VoidFunction
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => (
  <li>
    <Link
      onClick={onClick}
      href={href}
    >
      <p className="font-secondary text-lg text-gray-600 transition-colors duration-150 hover:text-secondary-400 max-md:text-base">
        {text}
      </p>
    </Link>
  </li>
)
