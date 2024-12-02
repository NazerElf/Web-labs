import React from 'react';
import { Link } from 'react-router-dom';
import './css/HelicopterCard.css';

const HelicopterCard = ({ name, description, passengers, maxSpeed, expense, type, size, imageUrl }) => (
  <div className="helicopter-card">
    <img src={imageUrl} alt={name} className="helicopter-image" />
    <h3>{name}</h3>
    <p>{description}</p>
    <ul>
      <li>Passengers: {passengers}</li>
      <li>Max Speed: {maxSpeed} km/h</li>
      <li>Expense: ${expense}/hour</li>
      <li>Type: {type}</li>
      <li>Size: {size}</li>
    </ul>
    <Link to={`/catalog/${name}`} className="view-more-button">View More</Link>
  </div>
);

export default HelicopterCard;
