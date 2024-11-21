import HomeBanner from "../../components/HomeBanner";
import { Button } from "@mui/material";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from "../../components/ProductItem";
import sideBannerImg1 from '../../asserts/images/side_banner_img_1.jpeg';
import sideBannerImg2 from '../../asserts/images/side_banner_img_2.jpeg';
import sideBannerImg3 from '../../asserts/images/side_banner_img_3.jpeg';
import offBannerImg1 from '../../asserts/images/off_banner_img1.jpeg';
import offBannerImg2 from '../../asserts/images/off_banner_img2.jpeg';
import newsletterImg from '../../asserts/images/newsletter_img.png';
import HomeCat from "../../components/HomeCat";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {

    return (
        <>
            <HomeBanner />
            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="banner">
                                <img className="cursor mb-4" src={sideBannerImg2} alt="img" />
                            </div>
                            <div className="banner">
                                <img className="cursor mt-5 mb-4" src={sideBannerImg1} alt="img" />
                            </div>
                            <div className="banner">
                                <img className="cursor mt-5 mb-4" src={sideBannerImg3} alt="img" />
                            </div>
                        </div>
                        <div className="col-sm-9 productsRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className="viewAllBtn">View All <HiOutlineArrowSmRight /></Button>
                            </div>
                            
                            <div className="products_row productsRow1 w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="light text-sml mb-0">New products with upadated stocks.</p>
                                </div>
                                <Button className="viewAllBtn">View All <HiOutlineArrowSmRight /></Button>
                            </div>
                            <div className="products_row productRow2 d-flex w-100 mt-4">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                            <div className="d-flex mb-5 mt-4 gap-3 bannerSec">
                                <div className="banner">
                                    <img className="cursor w-100 h-75" src={offBannerImg1} />
                                </div>
                                <div className="banner">
                                    <img className="cursor w-100 h-75" src={offBannerImg2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSec">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6 mt-4 mb-4">
                            <p className="text-white">$20 discount for your first order</p>
                            <h4 className="text-white">Join our newsletter and get . . .</h4>
                            <p  className="text-light">Join our email subscription now to get updates
                                <br /> on promotions and coupons</p>

                                <form>
                                    <IoMailOutline />
                                    <input type="text" placeholder="Your email address . . ." />
                                    <Button>Subscribe</Button>
                                </form>
                        </div>
                        <div className="col-md-6">
                            <img src={newsletterImg} alt="img" /> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;