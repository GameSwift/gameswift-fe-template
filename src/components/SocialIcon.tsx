import type { WithClassName } from '@/types/common'
import type { IconId } from '@/types/icons'
import { cn } from '@/utils/styles'
import { Icon } from './Icon'
import { Link } from './Link'

type SocialIconProps = {
  href: string
  label: string
  iconId: IconId
}

export const SocialIcon: React.FC<WithClassName<SocialIconProps>> = ({
  href,
  label,
  iconId,
  className
}) => (
  <Link
    href={href}
    aria-label={label}
    className="flex h-8 w-8 items-center justify-center border border-white/10 transition-colors hover:border-white/20"
  >
    <Icon
      id={iconId}
      className={cn('h-4 w-4 fill-current', className)}
    />
  </Link>
)
