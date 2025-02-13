import { Route, Routes } from "react-router";
import Home from '../pages/home/Home'; 
import Cards from '../pages/Cards';
import Read from '../pages/Read';
import Favorites from "../pages/Favorites";
import Info from '../pages/Info';

function Router() {
    return ( 
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/cards" element={<Cards/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/info" element={<Info/>}/>
     </Routes>
    )
}

export default Router