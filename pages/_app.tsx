import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import type { AppProps } from 'next/app'

import { StoreProvider } from '../utils/Store';
function MyApp({ Component, pageProps }: AppProps) {
  return(  
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <StoreProvider>
      <PayPalScriptProvider >
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </StoreProvider>
  </SnackbarProvider>
);
 
}

export default MyApp
