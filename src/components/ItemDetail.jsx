import React from 'react'
import { Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const ItemDetail = ({details}) => {
    const {imagen,categoria,nombre,precio,stock,descripcion} = details

  return (
    <div className='row m-auto'>
        <div className='col-12 col-md-6 text-center'>
            <Image
             variant="top" 
             src={imagen}
             alt={categoria}
             width={500}
             height={400}
            />
        </div>
        <div className='col-12 col-md-6'>
        <h1>Artículo {nombre}</h1>
        <h3>Categoría: {categoria}</h3>
        <h3>Precio: $ {precio}</h3>
        <h4>Descripción: {descripcion}</h4>
        <h4>Stock: {stock}</h4>
        <Link className="button" to={`/cart`}>Ir a carrito</Link>
        </div>
    </div>
  )
}

export default ItemDetail