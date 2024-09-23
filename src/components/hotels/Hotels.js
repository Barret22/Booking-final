import React from 'react';
import { useSelector } from 'react-redux';
import './Hotels.css';

const Hotels = () => {
  const hotels = useSelector((state) => state.hotels);

  return (
    <div>
      <h2>Hotels</h2>
      <div className="hotels-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p>Address: {hotel.address}</p>
            <p>City: {hotel.cityLive}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
