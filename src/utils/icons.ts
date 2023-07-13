import { IconId } from '@/types'

export const iconId = {
  twitter: 'twitter',
  discord: 'discord',
  telegram: 'telegram'
} as const

export const getIconHref = (id: IconId) => `/icons/sprite.svg#${id}`
