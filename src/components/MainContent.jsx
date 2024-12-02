import React from 'react';
import HelicopterCard from './HelicopterCard';
import helicopters from './Helicopter';
import './css/MainContent.css';

const MainContent = () => (
  <main className="main-content">
    <h2>Helicopter Catalog</h2>
    <div className="helicopter-list">
      {helicopters.map((helicopter, index) => (
        <HelicopterCard key={index} {...helicopter} />
      ))}
    </div>
  </main>
);

export default MainContent;
