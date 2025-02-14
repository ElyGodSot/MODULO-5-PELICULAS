import { useState } from "react"

export default function Header({eventobuscarpelicula}){

    let [entradatexto, setentradatexto]=useState('Buscar pelicula')
   

    //<NavLink to={`/VerPelicula/${titulo}/${id}`}>Buscar</NavLink>

    return(
        <>
        
        <label>Nombre:</label><input type="text" value={entradatexto} onChange={(event)=>{setentradatexto(event.target.value)}}></input>
        <button onClick={()=>{eventobuscarpelicula(entradatexto)}}>funcion</button>
        
        </>

    )
}