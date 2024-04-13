import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function carouselImages({images}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        speed={4000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        id='swiper-images'
      >
        <SwiperSlide>
          <img src='' alt='' />
        </SwiperSlide>
        {images.map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={alt} />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}
