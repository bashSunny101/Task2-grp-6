import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import NavStyle from './components/Navbar.jsx';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'd59f0303'; 
    const apiUrl = `http://www.omdbapi.com/?s=movie&type=movie&apikey=${apiKey}`;

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
      <NavStyle/>
      <div className="heading">
        <p id="heading">Popular Movies</p>
        <hr/>
        <div className="container">
       
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              imageUrl={movie.Poster}
              description={movie.Year}
            />
          ))
        )}
      </div>

      <div className="scroll-buttons">
        <button id="scroll-left"> <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" size="2xl" /></button>
        <button id="scroll-right"> <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" size="2xl" /></button>
      </div>
      
      <div className="heading">
        <p id="heading">Upcoming Movies</p>
        <hr/>
        <div className="container">
       
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              imageUrl={movie.Poster}
              description={movie.Year}
            />
          ))
        )}
        </div>
      </div>
    </div>

    </div>
  );
};

export default App;
