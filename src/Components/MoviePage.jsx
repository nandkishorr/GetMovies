import React, { useEffect, useState } from 'react';
import Card from './Card';
import { BASE_URL } from '../../constants';

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/movies`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        setMovies(data); // Adjust based on your API response structure
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className='h-screen w-full items-center'>Loading...</div>;
  }

  if (error) {
    return <div className='h-screen w-full items-center'>Error: Something went wrong</div>;
  }

  return (
    <div className="h-full w-full flex mt-10 pt-5 justify-center flex-col">
      {/* Movies title */}
      <div className="text-3xl font-bold text-slate-900 mb-10">Movies</div>
      {/* group of cards */}
      <div className="w-full h-full grid grid-cols-4 gap-x-16 gap-y-16 mt-5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
