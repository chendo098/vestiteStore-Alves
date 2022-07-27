import React from 'react'
import {Card, Button} from 'react-bootstrap';

const Item = ({item}) => {
    
    const {nombre, precio, imagen, categoria} = item
    console.log("🚀 ~ file: Item.jsx ~ line 7 ~ Item ~ imagen", imagen)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={imagen}
        alt={categoria}
        width={100}
        height={200}
        />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>$ {precio}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default Item