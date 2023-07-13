import { Button, Link } from '@/components'
import { InternalLink } from '@/config'
import { getMetadata } from '@/utils'

export const metadata = getMetadata({
  title: 'Not Found'
})

const Custom404Page = () => (
  <div className="layout-section flex-1 items-center justify-center gap-6 text-center">
    <span className="text-4xl">🤷</span>
    <h1 className="font-main text-4xl capitalize max-md:text-3xl">
      404 - page not found
    </h1>
    <p>
      Sorry, the page you are looking for doesn&apos;t exist.
      <br />
      Click below to go to homepage.
    </p>
    <Button asChild>
      <Link href={InternalLink.home}>Go home</Link>
    </Button>
  </div>
)

export default Custom404Page
