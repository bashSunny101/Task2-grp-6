import React from 'react';
import  { useState , useEffect } from "react"
import './movie.css'


const apiKey = "dfccb9b3ae7dbbd11879b0f571cfe1ea" ;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=28` ;

function Card(){
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" rounded overflow-hidden shadow-lg m-2">
      <div className="scroll-container">
        {movies.map((movie, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
          </div>
        ))}
        </div>
    </div>
  );
};

export default Card;
