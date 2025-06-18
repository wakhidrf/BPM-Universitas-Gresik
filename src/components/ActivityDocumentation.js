import React from 'react';
import CarouselComponent from './Carousel'; // Menggunakan kembali komponen Carousel
import './ActivityDocumentation.css';

function ActivityDocumentation({ images }) {
  return (
    <div className="activity-documentation-section">
      <h3>Dokumentasi kegiatan BPM</h3>
      <p>Carousel Dokumentasi Kegiatan</p>
      <CarouselComponent images={images} />
    </div>
  );
}

export default ActivityDocumentation;