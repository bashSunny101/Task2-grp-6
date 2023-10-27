import React, { useState, useEffect } from 'react';
import Card from './components/MovieCard';
import Nav from './components/Navbar.jsx';
import './app.css';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="heading">
        <p id="heading">Popular Movies</p>
        <hr />
      </div>
      <Card />
      <div className="heading">
        <p id="heading">Upcoming Movies</p>
        <hr />
      </div>
      <Card />
      <Footer />
    </div>
  );
};

export default App;
