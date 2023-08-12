import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation} from "swiper";

// Import Product Data here
import {SliderProducts} from "../../data/products";



// import swiper Style from lidery
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



function Slider() {
  return (
    <div className="s_container">
        <Swiper
        modules={[Pagination , Navigation]}
        className="mySwiper"
        navigation={true}
        // loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          856: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          
        }}
        >
        
        {SliderProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <div className="left_slide">
                <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Shop Now</div>
              </div>
              <img src={product.img} alt="Product" className="img_product" />
            </SwiperSlide>
        ))}

        </Swiper>



    </div>
  )
};

export default Slider;