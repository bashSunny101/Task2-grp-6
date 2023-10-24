import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import NavStyle from './components/NavBar';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft ,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function scrollLeft(id) {
  const c = document.querySelector(".box");
  const scrollAmount = -c.firstChild.clientWidth; // Scroll one container width to the left
  c.style.transform = `translateX(${scrollAmount}px)`;
}

function scrollRight(id) {
  const c = document.querySelector(".box");
  const scrollAmount = c.lastChild.clientWidth; // Scroll one container width to the right
  c.style.transform = `translateX(${scrollAmount}px)`;
}
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
      </div>
        <div className="container">
       
        <button id="scroll-left" onClick={scrollLeft}> <FontAwesomeIcon icon={faCircleChevronLeft} /></button>
        
        <div className="box">
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

        <button id="scroll-right" onClick={scrollRight}> <FontAwesomeIcon icon={faCircleChevronRight} /></button>
      </div>
      
      <div className="heading">
        <p id="heading">Upcoming Movies</p>
        <hr/>
      </div>
        <div className="container">
        <button id="scroll-left" onClick={scrollLeft}> <FontAwesomeIcon icon={faCircleChevronLeft} /></button>
        
        <div className="box">
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
        <button id="scroll-right" onClick={scrollRight}> <FontAwesomeIcon icon={faCircleChevronRight} /></button>
        </div>
      </div>
  );
};

export default App;
