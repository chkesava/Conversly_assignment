import React, { useState } from 'react';
import './index.css';

import { Link } from 'react-router-dom';
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MatrixApp = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);
  const handleBoxClick = (index) => {
    if (colors[index] === 'green' || colors[index] === 'orange') return;

    const newColors = [...colors];
    newColors[index] = 'green';  
    setColors(newColors);

    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);
    if (newClickOrder.length === 9) {
      changeAllToOrange(newClickOrder);
    }
  };

  const changeAllToOrange = (order) => {
    let delay = 0;
    order.forEach((index, i) => {
      setTimeout(() => {
        const newColors = [...colors];
        newColors[index] = 'orange';
        setColors(newColors);
      }, delay);
      delay += 200;  
    });
  };

  return (
    <div>
    <div className='navbar'>
    <h1>Matrix Game</h1>
    <Link to="/" className="back-button">
        <ArrowBackIcon />
        <span>Back</span>
    </Link>
    </div>
    <div className="matrix-container">
  
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleBoxClick(index)}
        />
      ))}
    </div>
    </div>
  );
};

export default MatrixApp;
