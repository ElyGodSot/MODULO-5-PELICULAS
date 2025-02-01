
import { useParams } from "react-router-dom"

import { useState,useEffect } from "react";
import CardVer from "../componentes/CardVer";





export default function Verpelicula(){


    const {seleccion, id} = useParams();
    const [movie, setMovie] = useState({});



    useEffect(()=>{
        async function consultarapi() {
          try{
          let response= await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=7401cf63b99ff4be24c4da9e57767bf4`)
          let responsejson= await response.json();
          console.log(responsejson)
          setMovie(responsejson)
          }catch(e){
            console.log("ocurrio error")
            console.log(e)
            
          }
        }
        consultarapi();
      },[])




    return (
        <>
            <CardVer titulo={movie.original_title} posterPath={movie.backdrop_path} texto={movie.overview} rate={movie.vote_average} ></CardVer>
          
        </>
    )
}
