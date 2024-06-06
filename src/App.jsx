import Favourite from "./Components/Favourite"
 import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
 import Search from "./Components/Search"
 import { useRecoilValue } from 'recoil';
 import { activeComponentState } from '../recoil'
 
 function App() {
   const activeComponent = useRecoilValue(activeComponentState);
 
   return (
     <div className="h-screen w-full">
       <Navbar />
       {activeComponent === 'Home' && <Home />}
       {activeComponent === 'Favourite' && <Favourite />}
       {activeComponent === 'Search' && <Search />}
     </div>
   );
 }
 
 export default App;
 