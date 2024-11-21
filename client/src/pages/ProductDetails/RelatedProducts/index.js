import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from '../../../components/ProductItem';

const Relatedproducts = ({title}) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <div className="info w-75">
                    <h3 className="mb-0 hd fs-5">{title}</h3>
                </div>
            </div>

            <div className="products_row productsRow1 w-100 mt-4">
                <Swiper
                    slidesPerView={5}
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
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Relatedproducts;