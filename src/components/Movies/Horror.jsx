import React, { useEffect, useState } from "react";

const apikey = "dfccb9b3ae7dbbd11879b0f571cfe1ea" ;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&with_genres=27`

export default function Horror(){
  const[movie , setMovie] = useState([])

  useEffect(() => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setMovie(data.results))
    .catch((error) => console.log(error))
  } , [])

    return(
        <>
           <div className=" rounded overflow-hidden shadow-lg m-2">
           <div className="scroll-container">
            {movie.map((movie, index) => (
          <div key={index} className="image-wrapper  m-1">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
          </div>
        ))}
        </div>
    </div>
        </>
    )
}