import React, { useState, useEffect } from 'react';

import Card from './components/MovieCard';
import Nav from './components/Navbar.jsx';

import MovieCard from './components/MovieCard';
import axios from 'axios';
import NavStyle from './components/NavBar';

import './app.css';
import Footer from './components/footer';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'd59f0303'; 
    const apiUrl = `https://www.omdbapi.com/?s=movie&type=movie&apikey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie data from OMDB:', error);
        setLoading(false);
      });
  }, []);


  
  return (
    <div>
      <Nav/>
      <div className="heading">
        <p id="heading">Popular Movies</p>
        <hr/>
      </div>
            <Card/>
      
      <div className="heading">
        <p id="heading">Upcoming Movies</p>
        <hr/>
      </div>
            <Card/>

            <Footer/>
      </div>


  );
};

export default App;
