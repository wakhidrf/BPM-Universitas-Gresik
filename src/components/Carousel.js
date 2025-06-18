import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Carousel.css';

function CarouselComponent({ images }) {
  if (!images || images.length === 0) {
    return <div className="carousel-placeholder">CAROUSEL</div>;
  }

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel Item ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;