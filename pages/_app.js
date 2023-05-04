import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {
  return (
  <ThirdwebProvider activeChain="mumbai">
     <Component {...pageProps} />
  </ThirdwebProvider>
  ) 
}

