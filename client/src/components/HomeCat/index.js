import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4'
    ])

    return (
        <>
            <div className="homeCat">
                <div className="mb-3 container">
                    <h6>FEATURE CATEGORIES</h6>
                    <Swiper
                        slidesPerView={10}
                        spaceBetween={10}
                        navigation={true}
                        slidesPerGroup={3}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            itemBg.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <div key={index} className="item text-center cursor" style={{ background: item }}>
                                            <img src="https://img.freepik.com/premium-photo/red-shirt-black-line-check-shirt-wooden
                                                -background_1059430-93987.jpg?ga=GA1.1.1338062474.1718105273&semt=ais_hybrid" 
                                                alt="img" />
                                            <h5>Product</h5>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeCat;