import { type IconId } from '@/types/icons'

export const iconId = {
  twitter: 'twitter',
  discord: 'discord',
  telegram: 'telegram',
  warning: 'warning'
} as const

export const getIconHref = (id: IconId) => `/icons/sprite.svg#${id}`
