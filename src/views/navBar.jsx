import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import React from 'react';
import './CSS/navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'
import { useContext } from "react";
import Decodificar from './validarRol';

function NavBar() {
  const {isLoggedIn ,setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const userRole = Decodificar();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); 
  };

  return (
    <Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="Logo de la pagina"></img>EcoSfera</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center align-items-center custom-nav">
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
              <NavDropdown.Item href="/ecosistema">Marino</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ecosistemaSelva">Selvatico</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/como-actuar" className="custom-nav-link">¿Como actuar?</Nav.Link>
            <Nav.Link as={Link} to="/ayudanos">Ayudanos!</Nav.Link>
          </Nav>

          
          <Nav>
          {isLoggedIn && (
              <>
                {userRole === 'admin' && ( /* logeados admin */
                  <Nav.Link as={Link} to="/adminConfig">Admin</Nav.Link>
                )} 
                <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
                <Nav.Link onClick={handleLogout}>Cerrar</Nav.Link>
              </>
            )}

            {/* No logeados */}
            {!isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/iniciar">Iniciar</Nav.Link>
                <Nav.Link as={Link} to="/registrarse">Registrarse</Nav.Link>
              </>
            )}

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

