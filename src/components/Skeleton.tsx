import { type WithClassName } from '@/types/common'
import { cn } from '@/utils/styles'

export const Skeleton: React.FC<WithClassName> = ({ className }) => (
  <div className={cn('animate-pulse rounded-md bg-white/5', className)} />
)
