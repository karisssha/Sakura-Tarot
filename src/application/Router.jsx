import { Route, Routes } from "react-router";
import Home from '../pages/home/Home'; 
import PickCards from '../pages/pickCards/Cards';
import Read from '../pages/Read';
import Favorites from "../pages/Favorites";
import Info from '../pages/Info';

function Router() {
    return ( 
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/cards" element={<PickCards/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/info" element={<Info/>}/>
     </Routes>
    )
}

export default Router