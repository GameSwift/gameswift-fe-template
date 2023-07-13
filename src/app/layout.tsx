import clsx from 'clsx'
import { Layout } from '@/layout'
import { MainFont, SecondaryFont } from '@/styles'
import '@/styles/globals.css'

export const metadata = {
  title: 'Next.js 13 Template',
  description:
    'A starter for Next.js using app router with TypeScript and Tailwind CSS.'
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head>
      <link
        rel="preload"
        as="image/svg+xml"
        href="sprite.svg"
      />
    </head>
    <body
      className={clsx(
        MainFont.variable,
        SecondaryFont.variable,
        'relative flex min-h-[100dvh] flex-col items-center overflow-x-hidden bg-background font-secondary'
      )}
    >
      <Layout>{children}</Layout>
    </body>
  </html>
)

export default RootLayout
