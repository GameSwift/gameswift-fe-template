import { Footer, Header } from './components'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="layout-container flex-1">{children}</main>
    <Footer />
  </>
)
