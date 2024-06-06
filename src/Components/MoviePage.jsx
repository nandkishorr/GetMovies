import Card from "./Card"

function MoviePage() {
  return (
    <div className="h-screen w-full flex bg-slate-700 pt-5 flex-col">
        {/* Movies title */}
        <div className="text-2xl font-semibold text-slate-900">Movies</div>
        {/* group of cards */}
        <Card/>
    </div>
  )
}

export default MoviePage
