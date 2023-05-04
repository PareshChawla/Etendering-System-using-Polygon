import React from 'react'
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        
        <footer class=" text-center text-white" style={{ backgroundColor: "#35348c" }}>
            <div class="container p-4">

                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1 " href="#!" role="button"
                    ><BsFacebook /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><BsTwitter /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><BsGoogle /></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><BsInstagram /></a>

                </section>

                <section class="">
                    <form action="">
                        <div class="row d-flex justify-content-center">
                            <div class="col-auto">
                                <p class="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div class="col-md-5 col-12">
                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" class="form-control" />
                                    <label class="form-label" for="form5Example21">Email address</label>
                                </div>
                            </div>

                            <div class="col-auto">
                                <button type="submit" class="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>


                <section class="">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Quick Links</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">Home</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">About Us</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Auction Links</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">Live Auctions</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Upcoming Auctions</a>
                                </li>

                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Help Center</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">FAQ's</a>
                                </li>

                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Contact Us</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">+91 7691542587</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">ashish@gmail.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
            </div>


            <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <a class="text-white" href="https://mdbootstrap.com/">Blockchain Based E-Tendering System Using Blockchain @Created BY Group No 11</a>
            </div>
        </footer>
    )
}

export default Footer