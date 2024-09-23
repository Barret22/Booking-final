
import React, { useEffect, useState } from 'react';
import './Hotels.css'


const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/hotels') 
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((err) => setError('Failed to load hotels'));
  }, []);

  return (
    <div className="hotels-container">
      <h2>Hotels</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src="https://via.placeholder.com/140" alt="Hotel" className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>Address: {hotel.address}</p>
              <p>City: {hotel.city}, State: {hotel.state}, Country Code: {hotel.countryCode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
