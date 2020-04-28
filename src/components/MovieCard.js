import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const MovieCard =({items})=>{
    return(
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={items.image} />
  <Card.Body>
    <Card.Title>{items.title}</Card.Title>
    <Card.Text>
      {items.synopsis}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>   
    )
}

export default MovieCard