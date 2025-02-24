import React, { useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchQuery) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=2b4b7dab`
      );
      setMovies(response.data.Search || []);
    } catch (err) {
      setError('Error fetching movies');
    }
    setLoading(false);
  };

  return (
    <div className="movie-search">
      <h2>Movie Search</h2>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="movies-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Movie;
