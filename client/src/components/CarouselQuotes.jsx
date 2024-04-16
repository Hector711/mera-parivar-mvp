import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function carouselQuotes({ quotes }) {
  return (
    <>
      <Swiper
        direction={'vertical'}
        speed={1800}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        id='swiper-quotes'
      >
        {quotes.map(({ quote }, index) => (
          <SwiperSlide key={index}>{quote}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
