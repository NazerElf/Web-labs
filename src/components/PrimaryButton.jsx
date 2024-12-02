import React from 'react';
import './css/PrimaryButton.css';

const PrimaryButton = ({ text, onClick }) => (
  <button className="primary-button" onClick={onClick}>
    {text}
  </button>
);

export default PrimaryButton;
