import React, { useState } from 'react';
import Home from '../components/Home';
import './pageCSS/HomePage.css';
import textArray from './textArray.js';

const HomePage = () => {
  const [extraContent, setExtraContent] = useState([]);

  const handleViewMore = () => {
    setExtraContent((prev) => [
      ...prev,
      <div key={`extra-${prev.length}`} className="home-page__extra-item">
        <hr />
        <p>{textArray[prev.length % textArray.length]}!</p>
      </div>,
    ]);
  };

  return (
    <div className="home-page">
      <Home />
      <button onClick={handleViewMore}>Interesting Fact</button>
      <div className="home-page__extra-content">{extraContent}</div>
    </div>
  );
};

export default HomePage;
