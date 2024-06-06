import Favourite from "./Components/Favourite"
 import Home from "./Components/Home"

import Navbar from "./Components/Navbar"
 import Search from "./Components/Search"

function App() {
 

  return (
  <div className="h-screen w-full">
             <Navbar />
            <Home/>
            <Favourite/>
           
            {/* <Search /> */}
  </div>
  )
}

export default App
