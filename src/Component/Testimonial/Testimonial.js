import React from 'react';
import css from "./Testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import  { TestimonialsData } from "../../data/testimonials";

import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination } from "swiper";


function Testimonial() {

  return (
    <div className={css.testimonial}>
        <div className={css.wrapper}>

            <div className={css.container}>
                <span>Top Reated.</span>
                <span>Accusam eirmod ipsum  Justo gubergren kasd invidunt sanctus vero et. Et aliquyam takimata.</span>
            </div>
        
            <img src={Hero} alt="testimonial_photo" />

            <div className={css.container}>
                <span>100K</span>
                <span>Coustomer Happy With us..</span>
            </div>
        </div>


        <div className={css.review}>Reviews</div>
        <div className={css.carosel} >
            <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            autoplay = {{
                delay: 4500,
                disableOnInteraction: false,
            }}
            loop = {true}
            pagination={{
              clickable: true,
            }}

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

            modules={[Autoplay, Pagination]}
            className={css.tCarosel}
            >
                {
                    TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide key={i}>
                           <div className={css.testimonials}>
                            <img src={testimonial.image} />

                            <span>{testimonial.comment}</span>

                            <hr />
                            <span>{testimonial.name}</span>
                           </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonial;