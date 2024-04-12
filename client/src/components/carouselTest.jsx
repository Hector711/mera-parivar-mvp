import React, { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/id/73/500/400',
  'https://picsum.photos/id/73/500/400',
  'https://picsum.photos/id/73/500/400',
  'https://picsum.photos/id/73/500/400',
  'https://picsum.photos/id/73/500/400',
  'https://picsum.photos/id/73/500/400',
  'https://picsum.photos/id/73/500/400',
];

export default function CarouselTest() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='auto-carousel' id='horizontal-scroll'>
      <div className='carousel-container'>
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            key={index}
            style={{ order: index === currentImageIndex ? images.length - 1 : 'initial' }}
          >
            <img src={image} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}
