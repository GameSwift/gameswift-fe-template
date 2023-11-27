import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/utils/styles'

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
        className={cn(buttonVariants({ variant, className }))}
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
  'inline-flex items-center p-4 text-base leading-none justify-center gap-1 flex-none uppercase font-main ring-offset-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-black hover:bg-primary-600 disabled:bg-disabled min-w-[200px] max-md:w-full max-md:min-w-0',
        outline:
          'border border-current hover:bg-primary/[0.03] text-primary disabled:hover:bg-transparent disabled:border-current disabled:text-disabled min-w-[200px] max-md:w-full max-md:min-w-0',
        ['outline-black']:
          'border border-current hover:bg-black/5 text-black disabled:hover:bg-transparent  min-w-[200px] max-md:w-full max-md:min-w-0 disabled:opacity-50',
        ['icon-square']:
          'h-8 w-8 p-0 border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 disabled:opacity-50 disabled:hover:border-white/10 disabled:hover:bg-white/5',
        ['icon-rounded']:
          'h-12 w-12 p-0 bg-white/5 text-white rounded-full hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5',
        ['icon-rounded-primary']:
          'h-12 w-12 p-0 bg-white/5 text-primary border border-primary rounded-full hover:bg-white/10 disabled:opacity-50 disabled:border-disabled disabled:text-disabled disabled:hover:bg-white/5',
        ['link-primary']:
          'underline leading-normal font-secondary normal-case underline-offset-4 text-primary hover:text-primary-600 disabled:text-disabled p-0',
        ['link-black']:
          'underline leading-normal font-secondary normal-case underline-offset-4 text-black hover:text-black/50 disabled:text-black/50 p-0',
        ghost:
          'leading-normal px-2 py-1 font-secondary normal-case hover:bg-white/5 disabled:opacity-50'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
