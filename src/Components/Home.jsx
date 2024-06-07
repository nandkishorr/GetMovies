import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import"../index.css"
import MoviePage from "./MoviePage"
import Carousal from "./Carousal/Carousal"
 import Image from "../../img1.png"
function Home() {
  return (
    <div className=" w-full  bg-[#F5F5F5] px-20 py-16">
    
        <div className="w-full h-fit flex justify-center  ">  
            {/* <img  className="w-full object-cover rounded-xl "src={Image} alt="" /> */}
                {/* Slider */}
                <Carousal/>
        
        </div>
        {/* MoviePage */}
        <MoviePage/>
    </div>
  )
}

export default Home


