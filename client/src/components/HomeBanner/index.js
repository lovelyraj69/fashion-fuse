import BannerImg1 from '../../asserts/images/banner_img_1.jpeg';
import BannerImg2 from '../../asserts/images/banner_img_2.jpeg';
import BannerImg3 from '../../asserts/images/banner_img_3.jpeg';
import BannerImg4 from '../../asserts/images/banner_img_4.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";


const HomeBanner = () => {

    return (
        <>
            <div className='container mt-3'>
                <div className="homeBannerSection">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        navigation={true}
                        loop={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="items">
                                <img className="slide-img w-100" src={BannerImg1} alt="slide_img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="items">
                                <img className="slide-img w-100" src={BannerImg2} alt="slide_img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="items">
                                <img className="slide-img w-100" src={BannerImg3} alt="slide_img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="items">
                                <img className="slide-img w-100" src={BannerImg4} alt="slide_img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;
