import clsx from 'clsx'
import { Metadata } from 'next'
import { Providers } from '@/components'
import { FaviconURL, OGImageUrl } from '@/config'
import { Layout } from '@/layout'
import { MainFont, SecondaryFont } from '@/styles'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js 13 Template',
  description:
    'A starter for Next.js using app router with TypeScript and Tailwind CSS.',
  openGraph: {
    images: OGImageUrl
  }
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head>
      <link
        rel="preload"
        as="image/svg+xml"
        href="sprite.svg"
      />
      <link
        rel="shortcut icon"
        href={FaviconURL}
      />
    </head>
    <body
      className={clsx(
        MainFont.variable,
        SecondaryFont.variable,
        'relative flex min-h-[100dvh] flex-col items-center overflow-x-hidden bg-background font-secondary font-normal text-white'
      )}
    >
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </body>
  </html>
)

export default RootLayout
