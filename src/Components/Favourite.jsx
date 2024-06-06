import { TfiArrowCircleLeft } from "react-icons/tfi";
import {activeComponentState } from '../../recoil';
import { useSetRecoilState } from 'recoil';
import Card from "./Card";
// import Card from "./Card";
function Favourite() {
  const setActiveComponent = useSetRecoilState(activeComponentState);
  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
  };
  const favMoviesString = localStorage.getItem('favoriteMovies');
  const favMovies = JSON.parse(favMoviesString) || [];
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F5F5] px-20 py-16">
      {/* top section */}
      <div className="w-full flex justify-between">
            <div className="flex text-4xl font-semibold items-center gap-3"><div onClick={() => handleSetActiveComponent('Home')}><TfiArrowCircleLeft /></div>My Favourites</div>
             {/* search */}
        <div className="h-[40px] w-[230px] flex items-center rounded-lg p-2 border-2 border-gray-200 gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer" >
            <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        <input type="text" className="w-full bg-transparent outline-none" placeholder="Search from favourites"/>
        </div>
      </div>
 {/* Fav Movies title */}
      <div className="mt-6 text-lg font-medium">
        {favMovies.length  ? (
          // Display message when movies array is empty
          <div className="mt-16 text-2xl font-semibold flex justify-center items-center bg-[#FF0059] gap-10 rounded-xl w-96"><svg width="50" height="50" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.99413 3.27985C8.328 1.332 5.54963 0.808035 3.46208 2.59168C1.37454 4.37532 1.08064 7.35748 2.72 9.467C3.95825 11.0604 7.47592 14.2591 9.12318 15.7291C9.42599 15.9993 9.5774 16.1344 9.7547 16.1876C9.90861 16.2338 10.0796 16.2338 10.2336 16.1876C10.4109 16.1344 10.5623 15.9993 10.8651 15.7291C12.5123 14.2591 16.03 11.0604 17.2683 9.467C18.9076 7.35748 18.6496 4.35656 16.5262 2.59168C14.4028 0.826798 11.6603 1.332 9.99413 3.27985Z" fill="white" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg> Add movies to My Favourites....</div>
        ) : (
          <>
            <div className="w-full h-fit grid grid-cols-4 gap-x-28 gap-y-10 mt-20">
              {favMovies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
        
        
   

      </div>
  )
}

export default Favourite
