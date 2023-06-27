import { Link } from 'react-router-dom';
import NavBar from "./navBar";
import { Fragment } from "react";
import './CSS/ecosistema.css'
import eco1 from '../images/eco1.jpg';
import eco2 from '../images/eco2.jpg';
import eco3 from '../images/eco3.jpg';
import flecha from '../images/flecha.png';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';

function Ecosistema() {
    return (
        
        <body class="bodyEcosistema">
        <><NavBar></NavBar>

        <Fragment>
                <div class="container">

                    <div class="row rowEcosistema">
                        <div class="col-lg-7 colEcosistema">


                            <div class="card cardEcosistema">
                                <div class="card-body">
                                    <h5 class="card-title">ECOSISTEMA MARINO</h5>
                                    <p class="card-text">El ecosistema marino, origen de la vida y fuente de una gigantesca y a veces desconocida diversidad de regiones, plantas marinas, animales marinos, microorganismos y moleculas organicas. Aunque su apariencia parezca homogenea, es de los ecosistemas mas heterogeneos del planeta con caracteristicas muy distintas desde los polos al tropico, asi como de uno a otro lado del mundo
                                    </p>

                                </div>
                                <img src={eco1} class="card-img-bottom cardImgBajo" alt="..."/>
                            </div>

      
                            <div class="card mb-3 cardBoton cardEcosistema" >
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

                            <div class="card mb-3 cardEcosistema">
                                <img src={eco3} class="card-img-top cardImgAlto" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Pez Payaso</h5>
                                        <p class="card-text">El pez payaso, tambien conocido como pez anemona, es conocido por sus brillantes colores blancos y anaranjados, y forma parte de la familia Pomacentridae.</p>
                                        
                                    </div>
                            </div>


                            <div class="card cardEcosistema">
                                <div class="card-body">
                                    <h5 class="card-title">Tortuga Verde Marina</h5>
                                    <p class="card-text">La tortuga verde marina es una especie de aguas tropicales con el mayor numero de hembras a nivel mundial y siendo la segunda especie mas abudante del mediterraneo</p>

                                </div>
                                <img src={eco2} class="card-img-bottom cardImgBajo" alt="..."/>
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
    
    export default Ecosistema;
           
           

           
           
