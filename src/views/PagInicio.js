import './CSS/pagInicio.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar';
import { Fragment } from 'react';

import logo from '../images/logo.png';
import desierto from '../images/desierto.jpg';
import marino from '../images/marino.jpg';

import {Routes, Route} from 'react-router-dom';
import Ecosistema from './Ecosistema';

function PagInicio() {
  return (
    <><NavBar></NavBar>

    <Fragment>
      
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active imag">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="display-1 fw-bolder"> Delfines</h5>
                <p class="mt-5 fs-3">¿Quieres saber más sobre los delfines, como sus características, donde habitan y sus datos curiosos? Da click en el siguiente botón.</p>
                <button class="btn btn-primary boton">Más información</button>
              </div>
            </div>
            <div class="carousel-item imag2">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="display-1 fw-bolder"> Pingüinos</h5>
                <p class="mt-5 fs-3">¿Quieres saber más sobre los pingüinos, como sus características, donde habitan y sus datos curiosos? Da click en el siguiente botón.</p>
                <button class="btn btn-primary boton">Más información</button>
              </div>
            </div>
            <div class="carousel-item imag5">
              <div class="carousel-caption d-none d-md-block">
                <h5 class="display-1 fw-bolder"> Tortugas</h5>
                <p class="mt-5 fs-3">¿Quieres saber mas sobre las tortugas, como sus caracteristicas, donde habitan y sus datos curiosos? Aprieta en el siguiente boton.</p>
                <button class="btn btn-primary boton">Más informacion</button>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


        <div class="card bg-dark text-white text-center">

          <img src={desierto} class="card-img dimension"></img>
          <div class="card-img-overlay">
            <h5 class="card-title titulo">ECOSISTEMA DESÉRTICO</h5>
            <p class="card-text separador">Toda la información del ecosistema desertico en este lugar.</p>
            <a href="#" class="btn btn-primary">Mas información</a>
          </div>
        </div>
        
        <div class="card bg-dark text-white text-center">

          <img src={marino} class="card-img dimension"></img>
          <div class="card-img-overlay">
            <h5 class="card-title titulo">ECOSISTEMA MARINO</h5>
            <p class="card-text separador">Toda la información del ecosistema marino en este lugar.</p>
            <a href="#" class="btn btn-primary">Mas información</a>
          </div>
        </div>

        <div class="container-fluid py-3 footer">
          <div class="row">
            <div class="col-xs-12 col-md-6 col-lg-3">
              <li class="foooter">
                

                <img src={logo} class="logo-footer"></img>
                <h3>EcoSfera</h3>
              </li>
            </div>
    
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h5>¿Quienes somos?</h5>
              <p>Insertar descripcion</p>
            </div>
            
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h5>Contactos</h5>
              <p>Dirección</p>
              <p>Correo Electronico</p>
              <p>Telefono</p>
            </div>
            
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h5>Avisos</h5>
              <p>Terminos y Condiciones</p>
              <p>Politicas de Privacidad</p>
            </div>
          </div>

          <div class="col-xs-12">
            <p class="text-black text-center"> Copyright - All rights reserved © 2023</p>
          </div>

        </div>
    </Fragment></> 
    
  );
}

export default PagInicio;
