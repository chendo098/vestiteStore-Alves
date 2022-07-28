import React from 'react'
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar id="navbar" bg="light">
    <Container className="m-1">
      <Navbar.Brand className="ml-0">
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
            <Link className="links" to="/">Catálogo</Link>
            <Link className="links" to="/categoria/remeras">Remeras</Link>
            <Link className="links" to="/categoria/pantalones">Pantalones</Link>
            <Link className="links" to="/categoria/camisas">Camisas</Link>
            <Link className="links" to="/cart">
              <CartWidget/>
            </Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar