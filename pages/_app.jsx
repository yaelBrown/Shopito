import '../assets/css/globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function App({ Component, pageProps}) {
  return (
    <>
      <Header/>
        <main>
          <Component {...pageProps}/>
        </main>
      <Footer/>
    </>
  )
}