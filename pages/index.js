import { useAddress, useContract } from "@thirdweb-dev/react";
import Head from "next/head";
import Header from "./Header";
import TendererDashboard from "./TendererDashboard";



export default function Home() {
  const address = useAddress()
  return (
    <div>
    <Head> 
      <title>E-tendering</title>
      <meta name="description" content="This is a E-Tendering dapp" />
    </Head>
    <Header />
    <TendererDashboard />
    
  
    </div>
  )
}
