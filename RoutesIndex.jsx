import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Verpelicula from "../Pages/Verpelicula";


export default function RoutesIndex(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Verpelicula/:seleccion/:id' element={<Verpelicula />}/>

        </Routes>
    )
}