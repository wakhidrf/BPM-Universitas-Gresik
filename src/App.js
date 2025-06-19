import React from 'react';
import './App.css'; // Untuk styling background utama
import Header from './components/Header';
import Announcement from './components/Announcement';
import CarouselComponent from './components/Carousel';
import VisionMission from './components/VisionMission';
import OrganizationChart from './components/OrganizationChart';
import DocumentList from './components/DocumentList';
import ActivityDocumentation from './components/ActivityDocumentation';
import Footer from './components/Footer';

function App() {
  const informationImages = [
    require('./assets/pictures/informations/info1.webp'),
    require('./assets/pictures/informations/info2.webp'),
    // ... tambahkan semua gambar informasi Anda
  ];

  const documentationImages = [
    require('./assets/pictures/documentations/doc1.webp'),
    require('./assets/pictures/documentations/doc2.webp'),
    // ... tambahkan semua gambar dokumentasi Anda
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Announcement />
        <CarouselComponent images={informationImages} />
        <VisionMission />
        <OrganizationChart />
        <DocumentList />
        <ActivityDocumentation images={documentationImages} />
      </div>
      <Footer />
    </div>
  );
}

export default App;