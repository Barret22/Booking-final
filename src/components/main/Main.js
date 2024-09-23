
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = ({ setShowHotelsLink }) => {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    adults: '',
    children: ''
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/destination')
      .then(response => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.destination || !formData.checkIn || !formData.checkOut || !formData.adults || !formData.children) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/hotels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowHotelsLink(true);
        navigate('/hotels');
      } else {
        setError('Error submitting the form');
      }
    } catch (error) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <select name="destination" onChange={handleChange} value={formData.destination}>
            <option value="">Destination</option>
            {data?.length > 0 &&
              data.map((destinationItem) => (
                <option key={destinationItem.id} value={destinationItem.label}>
                  {destinationItem.label}
                </option>
              ))}
          </select>
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} placeholder="Check in" />
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} placeholder="Check out" />
          <input type="number" name="adults" value={formData.adults} onChange={handleChange} placeholder="Adults" />
          <input type="number" name="children" value={formData.children} onChange={handleChange} placeholder="Children" />
          <button type="submit">Send</button>
        </form>
      </div>
      
      <h1 className="title">Travel With <span style={{ color: '#ff9800' }}>Booking</span></h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Main;
