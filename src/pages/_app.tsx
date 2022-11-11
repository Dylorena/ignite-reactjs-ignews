import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

// o _app é o componente que fica em volta de todas as páginas
// então componentes que queremos que tenha em todas as páginas
// ex.: header, um contextProvider