import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

const {cart, deleteAll, deleteOne} = useContext()
    if (cart.length === 0) {
        return (
            <h2>
                Aún no hay productos seleccionados, volver al <Link to="/">Catálogo</Link>
            </h2>
        )
    }

  return (
    <div>Cart</div>
  )
}

export default Cart