import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link з react-router-dom
import './css/Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/catalog">Products</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navigation;
