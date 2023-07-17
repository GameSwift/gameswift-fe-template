import clsx from 'clsx'
import { Providers } from '@/components'
import { AppName, FaviconURL, OGImageUrl } from '@/config'
import { Layout } from '@/layout'
import { MainFont, SecondaryFont } from '@/styles'
import '@/styles/globals.css'
import { getMetadata } from '@/utils'

export const metadata = getMetadata({
  openGraph: {
    images: [
      {
        url: OGImageUrl,
        width: 1200,
        height: 630,
        alt: `${AppName} OG Image`,
        type: 'image/png'
      }
    ]
  }
})

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
        'flex min-h-[100dvh] flex-col items-center overflow-x-hidden bg-gradient-to-l from-background to-[#13151a] font-secondary font-normal text-white'
      )}
    >
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </body>
  </html>
)

export default RootLayout
