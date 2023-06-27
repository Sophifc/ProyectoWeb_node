import './CSS/pagInicio.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar';
import Carrusel from './carrusel'
import { Fragment } from 'react';
import logo from '../images/logo.png';
import desierto from '../images/desierto.jpg';
import marino from '../images/marino.jpg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function PagInicio() {
  return (
    <><NavBar></NavBar>
    <Carrusel/>
    <Fragment>
        <div className="card bg-dark text-white text-center">

          <img src={desierto} className="card-img dimensionPinicio"></img>
          <div className="card-img-overlay">
            <h5 className="card-title tituloPagInicio py-4">ECOSISTEMA DESÉRTICO</h5>
            <p className="card-text separadorInicio">Toda la información del ecosistema desertico en este lugar.</p>
            <div class="botonInicio"><Nav.Link as={Link} to="/ecosistemaDesierto">Mas información</Nav.Link></div>
          </div>
        </div>
        
        <div className="card bg-dark text-white text-center">

          <img src={marino} className="card-img dimensionPinicio"></img>
          <div className="card-img-overlay">
            <h5 className="card-title tituloPagInicio py-4">ECOSISTEMA MARINO</h5>
            <p className="card-text separadorInicio">Toda la información del ecosistema marino en este lugar.</p>
            <div class="botonInicio"><Nav.Link as={Link} to="/ecosistema">Mas información</Nav.Link></div>
          </div>
        </div>

        <div className="container-fluid py-3 footer">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-3">
              <li className="foooter">
                

                <img src={logo} className="logo-footer"></img>
                <h3>EcoSfera</h3>
              </li>
            </div>
    
            <div className="col-xs-12 col-md-6 col-lg-3">
              <h5>¿Quienes somos?</h5>
              <p>Insertar descripcion</p>
            </div>
            
            <div className="col-xs-12 col-md-6 col-lg-3">
              <h5>Contactos</h5>
              <p>Dirección</p>
              <p>Correo Electronico</p>
              <p>Telefono</p>
            </div>
            
            <div className="col-xs-12 col-md-6 col-lg-3">
              <h5>Avisos</h5>
              <p>Terminos y Condiciones</p>
              <p>Politicas de Privacidad</p>
            </div>
          </div>

          <div className="col-xs-12">
            <p className="text-black text-center"> Copyright - All rights reserved © 2023</p>
          </div>

        </div>
    </Fragment></> 
    
  );
}

export default PagInicio;

