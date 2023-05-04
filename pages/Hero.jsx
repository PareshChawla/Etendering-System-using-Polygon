import React from 'react'
import home from '../public/bg.png'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from './Card'
import Footer from './Footer'


const Hero = () => {
  return (
    <>
        <div className='hero-container'>
                <div className="container">
                    <div className="row">

                        <div className="hero-components d-flex justify-content-center align-items-center p-2 m-1 pb-5">


                            <div className="col-md-7 pt-5">
                                <h1 className='heading'>Exclusive Online Bid for Unbeatable Deals!</h1>
                                <button className='explore btn-primary'>Explore Live Bidding</button>
                            </div>

                            <div className="col-md-5">
                                <Image src={home} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div className="hero-container-1">
                <div className="process-container container">
                    <div className='process-step'>
                        <h3>How It Works ?</h3>
                        <p className='mb-5'>Follow these simple steps and make profits !</p>
                    </div>

                    <div className="row">

                        <div className="col-md-3 p-card">

                            <img src="https://techbid.vercel.app/img/work/w1.png" alt="" />


                            <h4>Register for free</h4>
                            <p>To start using our auction, you’ll need to register. It’s completely free and requires just a few clicks!</p>
                        </div>
                        <div className="col-md-3 p-card">
                            <img src="	https://techbid.vercel.app/img/work/w2.png" alt="" />
                            <h4>Buy Or Bid</h4>
                            <p>To start using our auction, you’ll need to register. It’s completely free and requires just a few clicks!</p>
                        </div>
                        <div className="col-md-3 p-card">
                            <img src="	https://techbid.vercel.app/img/work/w3.png" alt="" />
                            <h4>Submit A Bid</h4>
                            <p>To start using our auction, you’ll need to register. It’s completely free and requires just a few clicks!</p>
                        </div>
                        <div className="col-md-3 p-card">
                            <img src="https://techbid.vercel.app/img/work/w4.png" alt="" />
                            <h4>Win</h4>
                            <p>To start using our auction, you’ll need to register. It’s completely free and requires just a few clicks!</p>
                        </div>



                    </div>


                </div>
            </div>

            <div className="hero-container-1 pb-5">
                <div className="upcoming-auction container">

                    <div className="upcoming-head">
                        <h4>Upcoming Auction</h4>
                        <p>This Auctions Will Be Live Shortly</p>
                    </div>
                    <div className="row">

                        <Swiper
                            className="swiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                390: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                720: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },

                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            // modules={[Autoplay, Pagination, Navigation]}

                        >

                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>
                            <SwiperSlide><Card /></SwiperSlide>


                        </Swiper>

                    </div>
                </div>
            </div>

            <div className='hero-container'>
                <div className="container">
                    <div className="row">

                        <div className="hero-components d-flex justify-content-center align-items-center p-2 m-1 pb-5">


                            <div className="col-md-7 pt-5">
                                <h1 className='heading'>Register For Free & Start Bidding Now!</h1>
                                <button className='explore btn-primary'>Register Now</button>
                            </div>

                            <div className="col-md-5 pt-5">
                                <img src="https://techbid.vercel.app/img/yes/right.png" alt="" style={{ width: "380px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

    </>
  )
}

export default Hero