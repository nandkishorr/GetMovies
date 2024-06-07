import { useState } from "react";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { activeComponentState } from '../../recoil';
import { useSetRecoilState } from 'recoil';
import Card from "./Card";

function Favourite() {
  const setActiveComponent = useSetRecoilState(activeComponentState);
  const handleSetActiveComponent = (component) => {
    setActiveComponent(component);
  };

  const favMoviesString = localStorage.getItem('favoriteMovies');
  const favMovies = JSON.parse(favMoviesString) || [];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = favMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F5F5] px-20 py-16">
      {/* top section */}
      <div className="w-full flex justify-between">
        <div className="flex text-4xl font-semibold items-center gap-3">
          <div onClick={() => handleSetActiveComponent('Home')}>
            <TfiArrowCircleLeft />
          </div>
          My Favourites
        </div>
        {/* search */}
        <div className="h-[40px] w-[230px] flex items-center rounded-lg p-2 border-2 border-gray-200 gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
          >
            <path
              d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Search from favourites"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {/* Fav Movies title */}
      <div className="mt-6 text-lg font-medium">
        {favMovies.length === 0 ? (
          // Display message when no favorite movies are available
          <div className="mt-16 text-2xl font-semibold flex justify-center items-center  gap-5 rounded-xl w-full">
            <svg width="30" height="30" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.67157 1.75055C3.23367 0.188455 5.76633 0.188455 7.32842 1.75055L8.49999 2.92213L9.67157 1.75055C11.2337 0.188455 13.7663 0.188455 15.3284 1.75055C16.8905 3.31265 16.8905 5.84531 15.3284 7.40741L8.49999 14.2358L1.67157 7.40741C0.109476 5.84531 0.109476 3.31265 1.67157 1.75055Z" fill="#F04438"/>
</svg>

            Add movies to My Favourites....
          </div>
        ) : (
          <>
            {filteredMovies.length === 0 ? (
              // Display message when no movies match the search query
              <div className="mt-16 text-2xl font-semibold flex justify-center items-center  gap-10 rounded-xl w-full">
                No such movie found...
              </div>
            ) : (
              <div className="w-full h-fit grid grid-cols-4 gap-x-28 gap-y-10 mt-20">
                {filteredMovies.map((movie) => (
                  <Card key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Favourite;
