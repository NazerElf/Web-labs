import React from 'react';
import './css/Select.css';

const Select = ({ options, onChange }) => (
  <select className="select" onChange={(e) => onChange(e.target.value)}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
