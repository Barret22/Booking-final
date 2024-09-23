
import React, { useEffect, useState } from 'react';
import './Main.css';


const Main = () => {

  const [data, setData] = useState([])
useEffect(() => {
  fetch('http://localhost:5000/destination')
  .then(response =>response.json())
  .then((responseData) => {
    console.log('data',responseData);
    setData(responseData)
  });
},[])

  return (
    <div className="main-container">
      <div className="form-container">
        <select>
          {data?.length > 0
           ? data?.map((destinationItem) => {
            console.log('destinationItem', destinationItem)
                     return <option
                     key={destinationItem.id}
                     >{destinationItem.label}</option>
          }) : null
          }

          {/* Добавьте опции для направлений */}
        </select>
        <input type="date" placeholder="Check in" />
        <input type="date" placeholder="Check out" />
        <input type="number" placeholder="Adults" />
        <input type="number" placeholder="Children" />
        <button type="submit">Submit</button>
      </div>
      
      <h1 className="title">Travel With <span style={{ color: '#ff9800' }}>Booking</span></h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default Main;
