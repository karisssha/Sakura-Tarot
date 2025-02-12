import { BrowserRouter, Route, Routes } from "react-router";
import App from '../App'; 
import Cards from '../pages/Cards';
import Read from '../pages/Read';
import Favorites from "../pages/Favorites";
import Info from '../pages/Info';

function Router() {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/cards" element={<Cards/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/info" element={<Info/>}/>
     </Routes>
    </BrowserRouter>
    )
}

export default Router