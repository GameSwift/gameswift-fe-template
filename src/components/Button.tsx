import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/utils'

export type ButtonProps = {
  asChild?: boolean
} & Pick<
  React.ComponentProps<'button'>,
  'children' | 'className' | 'onClick' | 'disabled' | 'type' | 'id'
> &
  VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      type = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export const buttonVariants = cva(
  'inline-flex items-center py-4 text-base leading-4 justify-center gap-1 uppercase font-main ring-offset-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed rounded-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-black hover:bg-primary-600 disabled:bg-disabled min-w-[210px] max-md:w-full max-md:min-w-0',
        outline:
          'border border-primary hover:border-primary-600 hover:text-primary-600 text-primary disabled:border-disabled disabled:text-disabled min-w-[210px] max-md:w-full max-md:min-w-0',
        ghost: 'text-white hover:bg-gray/10 disabled:text-gray',
        link: 'underline underline-offset-2'
      },
      size: {
        default: 'px-6',
        icon: 'p-2 w-10 h-10 shrink-0 rounded-full min-w-0 max-md:w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
