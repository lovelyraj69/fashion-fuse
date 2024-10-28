import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import productImg1 from '../../asserts/images/products_img_1.jpeg';
import productImg2 from '../../asserts/images/products_img_2.jpeg';
import { useRef, useState } from "react";

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <>
            <div className="productZoom">
                <div className="zoomProduct possition-relative">
                    <div className="badge">10%</div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="zoomSliderBig"
                        ref={zoomSliderBig}
                    >
                        <SwiperSlide>
                            <div className="item">
                                <InnerImageZoom
                                    zoomType='hover' zoomScale={1}
                                    src={productImg1}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <InnerImageZoom
                                    zoomType='hover' zoomScale={1}
                                    src={productImg2}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="zoomSlider"
                        ref={zoomSlider}
                    >
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                <img className="w-100" src={productImg1} onClick={() => goto(0)} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                <img className="w-100" src={productImg2} onClick={() => goto(1)} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProductZoom;