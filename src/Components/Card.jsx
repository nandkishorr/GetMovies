import PropTypes from 'prop-types';
import HeartButton from './HeartButton';
function Card({ movie }) {
  const handleHeartClick = (isChecked) => {
    // Get existing favorite movies from local storage or initialize an empty array
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const index = favoriteMovies.findIndex((m) => m.id === movie.id);
    if (isChecked) {
      // Add the movie to favorites if the heart button is checked and it's not already in the list
      if (index === -1) {
        favoriteMovies.push({ ...movie, fav: true });
      }
    } else {
      // Remove the movie from favorites if the heart button is unchecked and it exists in the list
      if (index !== -1) {
        favoriteMovies.splice(index, 1);
      }
    }
    // Update local storage with the updated list of favorite movies
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  };

  return (
    <div className="w-[250px] h-[465px] rounded-xl relative">
      <HeartButton onClick={handleHeartClick} fav={movie.fav}/>
      <img className="h-[370px] w-full rounded-xl" src={movie.banner_image} alt={movie.title} />
      <div className='w-full font-semibold flex flex-col pt-2'>
        <span className='text-sm text-slate-500'>{movie.year}</span>
        <span className='text-lg'>{movie.title}</span>
        <span className='text-sm text-slate-500'>{movie.title}</span>
      </div>
    </div>
  );
}


Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    banner_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    fav: PropTypes.bool,
  }).isRequired,
};

export default Card;
