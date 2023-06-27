import { Link } from 'react-router-dom';
import NavBar from "./navBar";
import { Fragment } from "react";
import './CSS/ecosistemadesierto.css'
import eco1 from '../images/suricata.webp';
import eco2 from '../images/desierto.webp'
import eco3 from '../images/zorros.jpg'
import flecha from '../images/flecha.png';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';

function EcosistemaDesierto() {
    return (
        
        <body class="bodyEcosistemaDesierto">
        <><NavBar></NavBar>

        <Fragment>
                <div class="container">

                    <div class="row rowEcosistema">
                        <div class="col-lg-7 colEcosistema">


                            <div class="card cardEcosistemaDesierto">
                                <div class="card-body">
                                    <h5 class="card-title">ECOSISTEMA DESERTICO</h5>
                                    <p class="card-text">El ecosistema desértico se desarrolla en lugares donde la pluviosidad es muy escasa. Los desiertos varían dependiendo de los patrones pluviométricos, temperatura y substratos (rocas, arena, residuos volcánicos, etc.). Los desiertos de latitudes templadas están distantes de las fuentes oceánicas de humedad
                                    </p>
                                    
                                </div>
                                <img src={eco2} class="card-img-bottom cardImgBajo" alt="..."/>
                            </div>

      
                            <div class="card mb-3 cardBoton cardEcosistemaDesierto" >
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

                            <div class="card mb-3 cardEcosistemaDesierto">
                                <img src={eco3} class="card-img-top cardImgAltoDes" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Fenec</h5>
                                        <p class="card-text">Los zorros del desierto, como también son conocidos a los zorros de Fénec se caracterizan por poseer un tamaño bastante reducido y contar con unas orejas muy desarrolladas, adaptadas perfectamente al desierto. Su piel es muy suave con un color entre crema y marrón hasta llegar a la punta de su cola de color negro.</p>
                                        
                                    </div>
                            </div>


                            <div class="card cardEcosistemaDesierto">
                                <div class="card-body">
                                    <h5 class="card-title">Suricata</h5>
                                    <p class="card-text">Es una especie diurna y de costumbres sociales. Son animales excavadores, que viven en grandes redes subterráneas con múltiples entradas. Sólo las dejan durante el día. Las suricatas tienen garras fuertes y curvadas que utilizan para cavar, y un hocico bastante puntiagudo. El pelaje se caracteriza por ser de colores ocres y marrones (de acuerdo a donde viven). Los suricatos pueden abrir y cerrar sus orejas, además de que utilizan las marcas oscuras que poseen alrededor de sus ojos a modo de unas peculiares gafas de sol.</p>

                                </div>
                                <img src={eco1} class="card-img-bottom cardImgBajoDes" alt="..."/>
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
    
    export default EcosistemaDesierto;
           
           
