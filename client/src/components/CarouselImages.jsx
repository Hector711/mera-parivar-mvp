import React from 'react';

const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
let offset = 0;
let slideID = 0;

setInterval(() => {
  // set offset to slide width
  offset = slides[0].offsetWidth;
  container.style.transition = 'left ease-in-out 3.5s';
  container.style.left = -offset + 'px';
  // set timeout
  setTimeout(() => {
    // remove oontainer transition
    container.style.transition = 'none';
    // move the current slide to the last position
    slides[slideID].style.order = slides.length - 1;
    // Move the container back to the starting position
    container.style.left = 0;
    // increment slide ID
    slideID++;
    // If the slide ID reaches the slides length
    if (slideID === slides.length) {
      // set the slide ID to zero
      slideID = 0;
      // select all slides
      slides.forEach(slide => {
        // Reset all slides order
        slide.style.order = 'initial';
      });
    }
  }, 3500);
}, 4000);

export default function CarouselImages({ images }) {
  return (
    <>
      <div id='horizontal-scroll'>
        {images.map(({ src, alt }) => (
          <img
            className='shadow horizontal-scroll-images'
            src={src}
            alt={alt}
          />
        ))}
      </div>

      <div class='auto-carousel' id='horizontal-scroll'>
        <div class='carousel-container'>

          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>
          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>
          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>
          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>
          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>
          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>
          <div class='slide'>
            <img src='https://picsum.photos/id/73/500/400' alt='' />
          </div>

        </div>
      </div>

    </>
  );
}