import { Button, Icon, Link, Image } from '@/components'
import { ExternalLink } from '@/config'
import Avocado from '@/public/images/avocado.jpg'

export const HomePage = () => (
  <section className="layout-section items-start gap-8">
    <h1 className="font-main text-6xl font-extrabold max-sm:text-3xl">
      <span className="text-secondary">Radek&apos;s</span> Next.js Starter
    </h1>
    <Button
      variant="secondary"
      asChild
    >
      <Link
        className="flex items-center gap-2 capitalize"
        href={ExternalLink.sourceCode}
      >
        <Icon
          id="github"
          width={24}
          height={24}
          className="fill-current text-white"
        />
        source code
      </Link>
    </Button>
    <Image
      src={Avocado}
      alt="Avocado"
    />
  </section>
)
