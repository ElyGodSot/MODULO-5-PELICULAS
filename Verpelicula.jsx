import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"


export default function Verpelicula(){

    const params= useParams()

    return(
        <>
        <h1>{params.seleccion}</h1>
        <NavLink to='/'>Regresar</NavLink>
        
        </>
    )
}