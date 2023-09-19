import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from './layouts/navbar/navbar'
import Footer from './layouts/footer/footer'
import { VisibilityContextProvider } from './context/visibility.context'
import MobileViewPopup from './layouts/mobileViewPopup/mobileViewPopup'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'getlinked',
  description: 'Getlinked Hackathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <VisibilityContextProvider>
          <Navbar />
          {children}
          <MobileViewPopup />
          {/* <Footer /> */}
        </VisibilityContextProvider>
      </body>
    </html>
  )
}
