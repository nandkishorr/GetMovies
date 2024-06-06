import { useRecoilValue } from "recoil";
import { moviesData } from "../../recoil";
import Card from "./Card";
function Search() {
  const movies = useRecoilValue(moviesData);
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5F5F5] px-20 py-16">
      {/* top section */}
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
        
   

      </div>
  )
}

export default Search
