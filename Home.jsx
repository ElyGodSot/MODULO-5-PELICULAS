import { useEffect,useState } from "react";
import CardHome from "../componentes/CardHome";


export default function Home(){
    
        

        
          const [peliculas, setpeliculas]=useState([])
        
          useEffect(()=>{
            async function consultarapi() {
              try{
              let response= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=7401cf63b99ff4be24c4da9e57767bf4")
              let responsejson= await response.json();
              console.log(responsejson)
              setpeliculas(responsejson.results)
              }catch(e){
                console.log("ocurrio error")
                console.log(e)
                
              }
            }
            consultarapi();
          },[])
          return (
            <>
            <h1>peliculas</h1>
          
            
            {peliculas.map((pelicula,index)=>{
            return <CardHome key={index} titulo={pelicula.title} posterPath={pelicula.poster_path} ></CardHome>
        
            })}
            
            
            
            </>
          

          )
        
    
}