import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ItemPage from './pages/ItemPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:name" element={<ItemPage />} /> 
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
