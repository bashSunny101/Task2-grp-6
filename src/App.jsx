import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
// import MovieCard from './components/MovieCard';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'YOUR_TMDB_API_KEY';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false); // Set loading to false when data is available
      })
      .catch((error) => {
        console.error('Error fetching movie data from TMDb:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8 flex flex-wrap justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              description={movie.overview}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
