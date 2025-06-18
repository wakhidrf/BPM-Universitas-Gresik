import React from 'react';
import './OrganizationChart.css';
import organizationChartImage from '../assets/pictures/organization/organization.webp';

function OrganizationChart() {
  return (
    <div className="organization-chart-section">
      <h3>STRUKTUR ORGANISASI</h3>
      <p>Gambar Struktur Organisasi</p>
      <img src={organizationChartImage} alt="Organization Chart" className="org-chart-image" />
    </div>
  );
}

export default OrganizationChart;