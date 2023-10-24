import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import NavStyle from './components/Navbar.jsx';

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
      <div className="container mx-auto mt-8 flex flex-wrap justify-center">
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
  );
};

export default App;
