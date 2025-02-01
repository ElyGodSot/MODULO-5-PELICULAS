
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function CardHome({titulo, posterPath, id}){

    const [posterPathImageUrl, setPosterPathImageUrl] = useState(`https://image.tmdb.org/t/p/w500/${posterPath}`);

    return(

        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={posterPathImageUrl} />
      <Card.Body>
        <Card.Title><NavLink to={`/VerPelicula/${titulo}/${id}`}>{titulo}</NavLink></Card.Title>
      
      </Card.Body>
    </Card>
    </div>
    )


}