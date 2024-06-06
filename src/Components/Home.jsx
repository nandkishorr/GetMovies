import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import"../index.css"
import MoviePage from "./MoviePage"
 import Image from "../../img1.png"
function Home() {
  return (
    <div className=" w-full  bg-[#F5F5F5] px-20 py-16">
    
        <div className="w-full h-fit flex justify-center ">  
            {/* <img  className="w-full object-cover rounded-xl "src={Image} alt="" /> */}
                {/* Slider */}
        <Carousel infiniteLoop={true}
                  autoPlay={true}
                  showArrows={false}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}>
                <div>
                    <img src={Image} />
                    <p className="legend ">Legend 2</p>
                </div>
                <div>
                    <img src={Image} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Image} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            {/* <Carousal/> */}
        </div>
        {/* MoviePage */}
        <MoviePage/>
    </div>
  )
}

export default Home


