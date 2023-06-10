import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
  <ThirdwebProvider activeChain="mumbai">
     <Component {...pageProps} />
     <ToastContainer />
  </ThirdwebProvider>

  ) 
}

