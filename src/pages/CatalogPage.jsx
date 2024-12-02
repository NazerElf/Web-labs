import React from 'react';
import HelicopterCard from '../components/HelicopterCard';
import helicopters from '../components/Helicopter';

const CatalogPage = () => (
  <div className="catalog-page">
    <br></br>
    <div className="helicopter-list">
      {helicopters.map((helicopter, index) => (
        <HelicopterCard key={index} {...helicopter} />
      ))}
    </div>
  </div>
);

export default CatalogPage;
