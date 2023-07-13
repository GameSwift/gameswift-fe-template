import { Icon, Link } from '@/components'
import { ExternalLink } from '@/config'
import { cn } from '@/utils'

type SocialIconsProps = {
  iconClassName?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ iconClassName }) => (
  <div className="flex items-center gap-3">
    <Link
      href={ExternalLink.github}
      aria-label="Github"
    >
      <Icon
        id="github"
        className={cn(
          'h-6 w-6 fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300',
          iconClassName
        )}
      />
    </Link>
    <Link
      href={ExternalLink.twitter}
      aria-label="Twitter"
    >
      <Icon
        id="twitter"
        className={cn(
          'h-6 w-6 fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300',
          iconClassName
        )}
      />
    </Link>
    <Link
      href={ExternalLink.linkedin}
      aria-label="LinkedIn"
    >
      <Icon
        id="linkedin"
        className={cn(
          'h-6 w-6 fill-current text-gray-500 transition-colors duration-150 hover:text-gray-300',
          iconClassName
        )}
      />
    </Link>
  </div>
)
