import { useEffect,useState } from "react";
import CardHome from "../componentes/CardHome";
import Header from "../componentes/Header";


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


        function eventobuscarpelicula(peliculabuscada){
          const array=[]

          peliculas.filter((pelicula) => {
            if (peliculabuscada === pelicula.title) { // Usa '===' para comparar
                array.push({
                    title: pelicula.title,
                    summary: pelicula.overview
                
                })}})
          //
          // let pelifiltrada=peliculas.filter((pelicula,indice)=>peliculabuscada=pelicula.title)
          console.log(array)

          
        }
          
        
        
        return (
            <>
            <h1>peliculas</h1>
            <Header eventobuscarpelicula={eventobuscarpelicula}></Header>
          
            
            {peliculas.map((pelicula,index)=>{
            return <CardHome key={index} titulo={pelicula.title} posterPath={pelicula.poster_path} id={pelicula.id} ></CardHome>
        
            })}
            
            
            
            </>
          

          )
        
    
}