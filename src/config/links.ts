import { LinkProps } from 'next/link'
import { env } from '@/utils'

export const InternalLink: Record<string, LinkProps['href']> = {
  home: '/'
}
export const ExternalLink = {
  github: env.client.NEXT_PUBLIC_GITHUB_URL,
  linkedin: env.client.NEXT_PUBLIC_LINKEDIN_URL,
  twitter: env.client.NEXT_PUBLIC_TWITTER_URL,
  email: `mailto:${env.client.NEXT_PUBLIC_EMAIL}`,
  sourceCode: 'https://github.com/radekskrabucha/next-app-template'
}
