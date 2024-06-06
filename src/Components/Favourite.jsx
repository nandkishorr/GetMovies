import { TfiArrowCircleLeft } from "react-icons/tfi";
import Card from "./Card";
// import Card from "./Card";
function Favourite() {
  const favMoviesString = localStorage.getItem('favoriteMovies');
  const favMovies = JSON.parse(favMoviesString) || [];
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F5F5] px-20 py-16">
      {/* top section */}
      <div className="w-full flex justify-between">
            <div className="flex text-4xl font-semibold items-center gap-3"><TfiArrowCircleLeft />My Favourites</div>
             {/* search */}
        <div className="h-[40px] w-[230px] flex items-center rounded-lg p-2 border-2 border-gray-200 gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer">
            <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        <input type="text" className="w-full bg-transparent outline-none" placeholder="Search from favourites"/>
        </div>
      </div>
 {/* Fav Movies title */}
        <div className="w-full h-fit grid grid-cols-4 gap-x-28 gap-y-10 mt-20">
        {favMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        </div>
        
   

      </div>
  )
}

export default Favourite
