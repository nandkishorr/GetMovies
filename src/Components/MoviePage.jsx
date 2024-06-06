import Card from "./Card"

function MoviePage() {
  return (
    <div className="h-fit w-full flex mt-10 pt-5 justify-center flex-col ">
        {/* Movies title */}
        <div className="text-2xl font-semibold text-slate-900">Movies</div>
        {/* group of cards */}
        <div className="w-full h-fit grid grid-cols-4 gap-x-28 gap-10 mt-5">
        <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
        
    </div>
  )
}

export default MoviePage
