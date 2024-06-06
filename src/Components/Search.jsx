import { useRecoilValue } from "recoil";
import { moviesData } from "../../recoil";
import Card from "./Card";

function Search() {
  const movies = useRecoilValue(moviesData);

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F5F5] px-20 py-16">
      {/* top section */}
      {movies.length === 0 ? (
        // Display message when movies array is empty
        <div className="mt-16 text-2xl font-semibold flex justify-center items-center"><svg width="50" height="50" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer">
        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> Type name of the movie to find....</div>
      ) : (
        // Display search results
        <>
      <div className="w-full flex justify-between">
        <div className="flex text-4xl font-semibold items-center gap-3">Search</div>
      </div>

  
          <div className="mt-6 text-lg font-medium">{movies.length} result found</div>
          {/* Search Movies title */}
          <div className="w-full h-fit grid grid-cols-4 gap-x-28 gap-y-10 mt-10">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
