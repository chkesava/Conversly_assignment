import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StockTrading from './components/StockTrading/StockTrading';
import MatrixApp from './components/Matrix/MatrixApp';
import { Container, Button, Typography } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <Typography variant="h4" gutterBottom>
          React Application
        </Typography>
        <Button component={Link} to="/stock-trading" variant="contained" sx={{ mr: 2 }}>
          Stock Trading
        </Button>
        <Button component={Link} to="/matrix" variant="contained">
          Matrix App
        </Button>
        <Routes>
          <Route path="/stock-trading" element={<StockTrading />} />
          <Route path="/matrix" element={<MatrixApp />} />
          <Route path="/" element={<Typography variant="h6">Welcome! Please select an application from the navigation above.</Typography>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
