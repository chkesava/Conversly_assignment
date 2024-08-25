import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import StockTrading from './components/StockTrading/StockTrading';
import MatrixApp from './components/Matrix/MatrixApp';
import Home from './components/Home/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/stock-trading" element={<StockTrading />} />
      <Route path="/matrix" element={<MatrixApp />} />
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default App;
