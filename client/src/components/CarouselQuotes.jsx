import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function carouselQuotes() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        speed={1800}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        id="swiper-quotes"
      >
        <SwiperSlide>Since 2014, our interventions with stakeholders and key allies in local communities have reached 7 states and 18 districts throughout India.</SwiperSlide>
        <SwiperSlide>+2.5 million children´s lives positively impacted through education</SwiperSlide>
        <SwiperSlide>+ 12.45 million benefited from surplus vegetable and cooked food distribution</SwiperSlide>
        <SwiperSlide>Since 2014, our interventions with stakeholders and key allies in local communities have reached 7 states and 18 districts throughout India.</SwiperSlide>
        <SwiperSlide>2 million government school children with clean water facilities in rural areas</SwiperSlide>
        <SwiperSlide>+ 12.45 million benefited surplus Vegetable & cook Food distribution</SwiperSlide>
      </Swiper>
    </>
  );
}
