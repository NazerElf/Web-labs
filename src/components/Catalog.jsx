import React from 'react';
import HelicopterCard from './HelicopterCard';
import helicopters from './Helicopter'; // Імпортуємо дані вертольотів
import './css/Catalog.css';

const Catalog = () => (
  <div className="catalog">
    <h2>Helicopter Catalog</h2>
    <div className="catalog-list">
      {helicopters.map((helicopter, index) => (
        <HelicopterCard key={index} {...helicopter} />
      ))}
    </div>
  </div>
);

export default Catalog;
