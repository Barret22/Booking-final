import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchHotelsRequest } from '../../redux/actions/Actions.js';


const BookingForm = () => {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const validateForm = (data) => {
        const { destination, checkIn, checkOut } = data;
        return destination && checkIn && checkOut;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(formData)) {
            dispatch(fetchHotelsRequest({ formData, navigate }));
        }
    };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Destination"
      />
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
      />
      <input
        type="date"
        name="checkOut"
        value={formData.checkOut}
        onChange={handleChange}
      />
      <input
        type="number"
        name="adults"
        value={formData.adults}
        onChange={handleChange}
        placeholder="Adults"
      />
      <input
        type="number"
        name="children"
        value={formData.children}
        onChange={handleChange}
        placeholder="Children"
      />
      <button type="submit">Susdfsdfsdfbmit</button>
    </form>
  );
};

export default BookingForm;
