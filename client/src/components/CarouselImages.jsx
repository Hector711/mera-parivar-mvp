import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

export default function carouselImages({ images }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      speed={5000}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 300,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      id='swiper-images'
    >
      {images.map(({ src, alt }, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
