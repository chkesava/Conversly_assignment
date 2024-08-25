import React from 'react';
import { Container,  Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ p: 0 }}>
      <Box className="hero-section">
        <Box className="text-center">
          <Typography variant="h2" component="h1" className="hero-title">
            Welcome to the React Application
          </Typography>
          <Typography variant="h5" component="p" className="hero-subtitle">
            Explore the amazing features we have to offer!
          </Typography>
          <Link to="/stock-trading">
          <button className="styled-button">Stock Trading</button>
        </Link>
        <Link to="/matrix">
          <button className="styled-button">Matrix App</button>
        </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
