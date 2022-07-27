import React from 'react'
import { Image } from 'react-bootstrap';
import cart from '../cart.svg'

const CartWidget = () => {
  return (
    <Image
        src={cart}
        width="30"
        height="30"
        className="d-inline-block align-top mt-0"
        alt="logo"
        />
  )
}

export default CartWidget