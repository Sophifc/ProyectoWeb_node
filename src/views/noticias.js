import './CSS/noticias.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import noticia1 from '../images/noticia1.jpg';
import noticia2 from '../images/noticia2.jpg';
import logo from '../images/logo.png';

function Noticias() {

    return (

        <div class="bodyNoticias">
        <><NavBar></NavBar>

            <Fragment>
                <div class="row rowNoticias">


                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={noticia1} class="img-fluid rounded-start" alt="Foto de una noticia"/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Noticia desierto</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={noticia2} class="img-fluid rounded-start" alt="Foto de una noticia"/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Noticia nieve</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
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
        </div>

    );
}

export default Noticias;


