import React from 'react'
import Link from 'next/link'
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <div className="bg-cyan-400 flex justify-between items-center px-4 py-2">
      <Link legacyBehavior href="/">
        <a className="text-white text-lg font-semibold">E-Tendering</a>
      </Link>
      <div>
        <Link legacyBehavior href="/GetTenders">
          <a className="text-white mr-4">Get Tenders</a>
        </Link>
        <ConnectWallet buttonClassName="bg-white text-cyan-400 font-semibold rounded-lg py-2 px-4" />
      </div>
    </div>
  )
}

export default Header
