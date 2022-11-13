import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp

// o _app é o componente que fica em volta de todas as páginas
// então componentes que queremos que tenha em todas as páginas
// ex.: header, um contextProvider