import React from 'react';

const MovieCard = ({ title, imageUrl, description }) => {
  return (
    <div className="max-w-xs w-half rounded overflow-hidden shadow-lg m-2">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
