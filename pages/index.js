import { useAddress, useContract } from "@thirdweb-dev/react";
import Head from "next/head";
import Header from "./Header";
import Admin from "./admin";
import Hero from './Hero';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const address = useAddress()
  return (
    <div>
      <Head>
        <title>E-tendering</title>
        <meta name="description" content="This is a E-Tendering dapp" />
      </Head>
      <Header />
      <Hero />

      <ToastContainer />
    </div>
  )
}
