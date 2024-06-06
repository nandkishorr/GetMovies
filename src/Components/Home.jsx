import MoviePage from "./MoviePage"
import Image from "../../img1.png"
function Home() {
  return (
    <div className="h-fit  w-full  bg-[#F5F5F5] px-20 py-16">
        {/* Slider */}
        <div className="w-full h-[658px] flex justify-center ">  
            <img  className="w-full object-cover rounded-xl "src={Image} alt="" />
        </div>
        {/* MoviePage */}
        <MoviePage/>
    </div>
  )
}

export default Home
