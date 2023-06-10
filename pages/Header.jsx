import React from 'react'
import Link from 'next/link'
import { ConnectWallet } from "@thirdweb-dev/react";
import { IoIosWallet } from 'react-icons/io'
import { HiOutlineLogout } from 'react-icons/hi'
// import { useNavigate } from 'react-router-dom'

const Header = () => {

  const mode = "";



  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //     navigate("/signin")
  // }

  // const handleLogout = () => {

  //     signOut(auth).then(() => {
  //         // Sign-out successful.
  //         handleNavigate("/");
  //         window.alert("successfully loged out")
  //     }).catch((error) => {
  //         // An error happened.
  //         window.alert(error)


  //     });
  // }

  return (
    <div className='navbar-container'>
      <nav class="navbar navbar-expand-lg container">
        <a class="navbar-brand" href="#">E-Tendering</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">{mode == "user" ? " " :"CREATE TENDER"} </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/GetTenders">TENDERS</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Getbids">ALL BIDS </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Getwinningbid">WINNER</a>
            </li>

            <li class="nav-item ml-3">
              <ConnectWallet buttonClassName="bg-white text-cyan-400 font-semibold rounded-lg py-2 px-5" />
            </li>



      
          </ul>

        </div>


      </nav>
    </div>
  )
}
{/* <ConnectWallet buttonClassName="bg-white text-cyan-400 font-semibold rounded-lg py-2 px-4" /> */ }
export default Header
