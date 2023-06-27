import { Link } from 'react-router-dom';
import NavBar from "./navBar";
import { Fragment } from "react";
import './CSS/ecosistemaSelva.css'
import eco1 from '../images/jaguar.jpg';
import eco2 from '../images/tucan.jpg';
import eco3 from '../images/selva.jpg';
import flecha from '../images/flecha.png';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';

function EcosistemaSelva() {
    return (
        
        <body class="bodyEcosistemaSelva">
        <><NavBar></NavBar>

        <Fragment>
                <div class="container">

                    <div class="row rowEcosistema">
                        <div class="col-lg-7 colEcosistema">


                            <div class="card cardEcosistemaSelva">
                                <div class="card-body">
                                    <h5 class="card-title">ECOSISTEMA MARINO</h5>
                                    <p class="card-text">DESCRIPCION
                                    </p>
                                    <p class="card-text"><small class="text-body-secondary">tiempo de actualizacion</small></p>
                                </div>
                                <img src={eco1} class="card-img-bottom cardImgBajoSelva" alt="..."/>
                            </div>

      
                            <div class="card mb-3 cardBoton cardEcosistemaSelva" >
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={flecha} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8 col8Ecosistema">
                                        <div class="card-body">

                                            <div class="button-Ecosistema">
                                            <Nav.Link  as={Link} to="/animales" >Vamos a ver su fauna</Nav.Link>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>

                        <div class="col-lg-5">

                            <div class="card mb-3 cardEcosistemaSelva">
                                <img src={eco3} class="card-img-top cardImgAltoSelva" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                            </div>


                            <div class="card cardEcosistemaSelva">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                                <img src={eco2} class="card-img-bottom cardImgBajoSelva" alt="..."/>
                            </div>


                        </div>

                    </div>



                </div>


                <div className="container-fluid py-3 footer">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            <li className="foooter">
                                <img src={logo} class="logo-footer"/> 
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
                </div>
                


            </Fragment>

          


        
        </>
        </body>

        
        );
    }
    
    export default EcosistemaSelva;
           