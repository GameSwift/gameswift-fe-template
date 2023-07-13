import { IconId } from '@/types'

export const iconId = {
  linkedin: 'linkedin'
} as const

export const getIconHref = (id: IconId) => `/icons/sprite.svg#${id}`
