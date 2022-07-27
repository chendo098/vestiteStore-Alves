import React from 'react'
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar id="navbar" bg="light">
    <Container className="m-1">
      <Navbar.Brand className="ml-0" href="/">
        <Image
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        {' '}
            Avalon Indumentaria Masculina
      </Navbar.Brand>
      <Nav className="mr-0">
            <Nav.Link href="/remeras">Remeras</Nav.Link>
            <Nav.Link href="/pantalones">Pantalones</Nav.Link>
            <Nav.Link href="/camisas">Camisas</Nav.Link>
            <Nav.Link href="/cart">
              <CartWidget/>
            </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar