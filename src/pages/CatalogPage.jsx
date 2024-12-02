import React, { useState } from 'react';
import HelicopterCard from '../components/HelicopterCard';
import helicopters from '../components/Helicopter';
import './pageCSS/CatalogPage.css';

const CatalogPage = () => {
  const [filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minSpeed: '',
    maxSpeed: '',
    minPassengers: '',
    maxPassengers: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const resetFilters = () => {
    setFilters({
      type: '',
      minPrice: '',
      maxPrice: '',
      minSpeed: '',
      maxSpeed: '',
      minPassengers: '',
      maxPassengers: '',
    });
    setSearchQuery('');
  };

  // Фільтрація даних
  const filteredHelicopters = helicopters.filter((helicopter) => {
    const matchesType = filters.type
      ? helicopter.type.toLowerCase() === filters.type.toLowerCase()
      : true;

    const matchesPrice =
      (!filters.minPrice || helicopter.expense >= Number(filters.minPrice)) &&
      (!filters.maxPrice || helicopter.expense <= Number(filters.maxPrice));

    const matchesSpeed =
      (!filters.minSpeed || helicopter.maxSpeed >= Number(filters.minSpeed)) &&
      (!filters.maxSpeed || helicopter.maxSpeed <= Number(filters.maxSpeed));

    const matchesPassengers =
      (!filters.minPassengers || helicopter.passengers >= Number(filters.minPassengers)) &&
      (!filters.maxPassengers || helicopter.passengers <= Number(filters.maxPassengers));

    const matchesSearch = searchQuery
      ? helicopter.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        helicopter.description.toLowerCase().includes(searchQuery.trim().toLowerCase())
      : true;

    return matchesType && matchesPrice && matchesSpeed && matchesPassengers && matchesSearch;
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value, // Оновлення значення фільтра
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="catalog-page">
      <div className="filters">
        <label>
          Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Military">Military</option>
            <option value="Commercial">Commercial</option>
            <option value="Rescue">Rescue</option>
          </select>
        </label>

        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            min="0"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            min="0"
          />
        </label>

        <label>
          Min Speed:
          <input
            type="number"
            name="minSpeed"
            value={filters.minSpeed}
            onChange={handleFilterChange}
            min="0"
          />
        </label>
        <label>
          Max Speed:
          <input
            type="number"
            name="maxSpeed"
            value={filters.maxSpeed}
            onChange={handleFilterChange}
            min="0"
          />
        </label>

        <label>
          Min Passengers:
          <input
            type="number"
            name="minPassengers"
            value={filters.minPassengers}
            onChange={handleFilterChange}
            min="0"
          />
        </label>
        <label>
          Max Passengers:
          <input
            type="number"
            name="maxPassengers"
            value={filters.maxPassengers}
            onChange={handleFilterChange}
            min="0"
          />
        </label>

        <label>
          Search:
          <input
            type="text"
            placeholder="Search by name or description"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>

        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="helicopter-list">
        {filteredHelicopters.length > 0 ? (
          filteredHelicopters.map((helicopter, index) => (
            <HelicopterCard key={index} {...helicopter} />
          ))
        ) : (
          <p>No helicopters match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
