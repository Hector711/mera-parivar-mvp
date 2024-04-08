import React from 'react';

export default function HorizontalScroll({ images }) {
  return (
    <div id='horizontal-scroll'>
      {images.map(({ src, alt }) => (
        <img className='shadow horizontal-scroll-images' src={src} alt={alt} />
      ))}
    </div>
  );
}
