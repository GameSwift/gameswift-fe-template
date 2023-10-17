import { WithClassName } from '@/types'
import { cn } from '@/utils'

export const Skeleton: React.FC<WithClassName> = ({ className }) => (
  <div className={cn('animate-pulse rounded-md bg-white/5', className)} />
)
