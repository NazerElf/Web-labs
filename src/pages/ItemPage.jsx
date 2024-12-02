import React from 'react';
import { useParams } from 'react-router-dom';
import helicopters from '../components/Helicopter';
import './pageCSS/ItemPage.css';
import { Link } from 'react-router-dom';


const ItemPage = () => {
  const { name } = useParams(); // Отримуємо назву вертольота з URL
  const helicopter = helicopters.find((item) => item.name === name);

  if (!helicopter) {
    return <div>Helicopter not found!</div>;
  }

  const { description, passengers, maxSpeed, expense, type, size, imageUrl } = helicopter;

  return (
    <div className="item-page">
      <img src={imageUrl} alt={name} className="item-image" />
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li>Passengers: {passengers}</li>
        <li>Max Speed: {maxSpeed} km/h</li>
        <li>Expense: ${expense}/hour</li>
        <li>Type: {type}</li>
        <li>Size: {size}</li>
      </ul>
      <Link to="/catalog" className="back-button">Back to Catalog</Link>
    </div>
  );
};

export default ItemPage;
