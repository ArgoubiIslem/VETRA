import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DataProvider } from '../store/GlobalState'
function MyApp({ Component, pageProps }: AppProps) {
  return(  <DataProvider>
    <Component {...pageProps} />
</DataProvider>)
 
}

export default MyApp
