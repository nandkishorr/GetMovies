import PropTypes from 'prop-types';
// import Img from '../assets/img2.png'
import HeartButton from './HeartButton'
function Card({movie}) {
  return (
    <div className="w-[250px] h-[465px] rounded-xl relative">
         <HeartButton/>
        <img className=" h-[370px] w-full rounded-xl" src={movie.banner_image} alt={movie.title} />
        <div className='w-full font-semibold flex flex-col pt-2'>
            <span className='text-sm text-slate-500'>{movie.year}</span>
            <span className='text-lg'>{movie.title}</span>
            <span className='text-sm text-slate-500'>{movie.title}</span>
        </div>
    </div>
  )
}

Card.propTypes = {
  movie: PropTypes.shape({
    banner_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card
