import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/utils'

type IconWrapperProps = {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  className,
  asChild = false
}) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(
        'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/5',
        className
      )}
    >
      {children}
    </Comp>
  )
}
