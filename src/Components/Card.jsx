import Img from '../assets/img2.png'
import HeartButton from './HeartButton'
function Card() {
  return (
    <div className="w-[250px] h-[465px] rounded-xl relative">
         <HeartButton/>
        <img className=" h-[370px] w-full rounded-xl" src={Img} alt="" />
        <div className='w-full font-semibold flex flex-col pt-2'>
            <span className='text-sm text-slate-500'>2016</span>
            <span className='text-lg'>Interstellar</span>
            <span className='text-sm text-slate-500'>Action,Horror </span>
        </div>
    </div>
  )
}

export default Card
