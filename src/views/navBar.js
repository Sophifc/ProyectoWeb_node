import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import React from 'react';


function  NavBar() {
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo"></img>EcoSfera</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav Nav className="justify-content-center align-items-center custom-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
            <NavDropdown title="Animales" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/animal-por-dia">Animal por dia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/extincion">Animal en peligro de extinción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/animales">Animal por ecosistema</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ecosistemas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ecosistema">Desertico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Marino</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Terrestre</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/como-actuar" className="custom-nav-link">¿Como actuar?</Nav.Link>
            <Nav.Link as={Link} to="/ayudanos">Ayudanos!</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#home">Iniciar</Nav.Link>
            <Nav.Link href="#link">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
