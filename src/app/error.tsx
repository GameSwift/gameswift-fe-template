'use client'

import { Button, Link, StatusMessage } from '@/components'
import { InternalLink } from '@/config'

type ErrorProps = {
  reset: VoidFunction
  error: Error
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => (
  <div className="layout-section flex-1 items-center justify-center gap-6 text-center">
    <span className="text-4xl">🤷</span>
    <h1 className="font-main text-4xl capitalize max-md:text-3xl">
      Opss... Something went wrong
    </h1>
    <p>This was probably our fault. Please try again in a few minutes.</p>
    <div className="flex flex-wrap items-center justify-center gap-6">
      <Button
        asChild
        variant="outline"
        className="min-w-[150px]"
      >
        <Link href={InternalLink.home}>Go home</Link>
      </Button>
      <Button
        onClick={reset}
        className="min-w-[150px]"
      >
        Reset
      </Button>
    </div>
    <StatusMessage variant="error">{error.message}</StatusMessage>
  </div>
)

export default Error
