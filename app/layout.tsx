import './globals.css'
import type { Metadata } from 'next'
import Header from './layouts/header/header'
import { VisibilityContextProvider } from './context/visibility.context'
import MobileViewPopup from './layouts/mobileViewPopup/mobileViewPopup'
import { montserrat } from './fonts/fonts'

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
          <Header />
          {children}
          <MobileViewPopup />
        </VisibilityContextProvider>
      </body>
    </html>
  )
}
