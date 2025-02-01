
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export default function CardVer({titulo, posterPath, texto, rate}){

  

    return(

        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
      <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>
         {texto}
         <br></br>
         {rate}
        </Card.Text>
        <Button ><NavLink to={`/`}>Regresar</NavLink></Button>
        <br></br>
        <Button >Ver </Button>
      
      
      </Card.Body>
    </Card>
    </div>
    )


}

//<Card.Title><NavLink to={`/`}>Regresar</NavLink></Card.Title>