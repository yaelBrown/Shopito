
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <main>{children}</main>
      </body>
      <Footer/>
    </html>
  )
}