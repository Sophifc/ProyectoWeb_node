import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import React from 'react';
import './CSS/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function  NavBar() {
  return (
    <Navbar className="header" expand="lg">
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
              <NavDropdown.Item as={Link} to="/ecosistemaDesierto">Desertico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ecosistema">Marino</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ecosistemaSelva">Selvatico</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/como-actuar" className="custom-nav-link">¿Como actuar?</Nav.Link>
            <Nav.Link as={Link} to="/ayudanos">Ayudanos!</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/iniciar">Iniciar</Nav.Link>
            <Nav.Link as={Link} to="/Registrarse">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
