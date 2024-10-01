import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const API_BASE_URL = 'http://localhost:8080/main/getdata'; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        setMovies(response.data); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={`http://localhost:8080/src/main/resources/static ${movie.poster}`}
              alt={movie.title} 
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.releasedate}</p>
            <p>Genre: {movie.genre }</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
