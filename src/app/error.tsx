'use client'

import { Button, Link, StatusMessage, Icon } from '@/components'
import { InternalLink } from '@/config'

type ErrorProps = {
  reset: VoidFunction
  error: Error
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => (
  <div className="layout-section flex-1 items-center justify-center gap-6">
    <div className="flex w-full max-w-xl flex-col gap-6 border border-white/10 bg-background-400/20 p-8 backdrop-blur-lg max-md:items-center max-md:border-none max-md:bg-transparent max-md:p-0 max-md:backdrop-blur-none">
      <div className="-mb-4 flex items-center justify-between gap-4 max-md:flex-col-reverse">
        <h2 className="font-main text-2xl max-md:text-xl">
          Opss... Something went wrong
        </h2>
        <Button
          asChild
          size="icon"
          className="bg-white/10 p-0 text-xl text-white hover:bg-white/10"
        >
          <div>
            <Icon
              id="warning"
              className="h-4 w-[5px]"
            />
          </div>
        </Button>
      </div>
      <p className="text-sm text-white/75">
        This was probably our fault.
        <br />
        Please try again in a few minutes.
      </p>
      <div className="flex flex-1 gap-6">
        <Button
          onClick={reset}
          variant="outline"
          className="flex-1"
        >
          Reset
        </Button>
        <Button
          asChild
          className="flex-1"
        >
          <Link href={InternalLink.home}>back to home</Link>
        </Button>
      </div>
    </div>
    <StatusMessage
      className="max-w-lg text-center"
      variant="error"
    >
      {error.message}
    </StatusMessage>
  </div>
)

export default Error
