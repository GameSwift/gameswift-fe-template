import { ExternalLink } from '@/config'
import { SocialIcon } from './SocialIcon'

export const SocialIcons = () => (
  <div className="flex items-center gap-4">
    <SocialIcon
      href={ExternalLink.twitter}
      iconId="twitter"
      label="twitter"
    />
    <SocialIcon
      href={ExternalLink.discord}
      iconId="discord"
      label="discord"
    />
    <SocialIcon
      href={ExternalLink.telegram}
      iconId="telegram"
      label="telegram"
      className="translate-x-[1px] translate-y-[3px] scale-125"
    />
  </div>
)
