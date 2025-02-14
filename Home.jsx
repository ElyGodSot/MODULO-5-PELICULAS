import { useEffect,useState } from "react";
import CardHome from "../componentes/CardHome";
import Header from "../componentes/Header";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export default function Home(){
    
        

        
          const [peliculas, setpeliculas]=useState([])
          const [title2, settitle2]=useState()
          const [id2, setid2]=useState()
        
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

          const navigate = useNavigate()

       function eventobuscarpelicula(peliculabuscada){
          const array=[]
          let encontrado = false
         


          peliculas.filter((pelicula) => {
            if (peliculabuscada === pelicula.title) {
             
               settitle2(pelicula.title)
               array.push(title2)
               setid2(pelicula.id)
                encontrado=true
              }})
              
               if (title2 && id2 && encontrado){
                navigate(`/VerPelicula/${title2}/${id2}`)
              } else if (!encontrado) {
                alert("No se halló película");

            
        }}

        
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