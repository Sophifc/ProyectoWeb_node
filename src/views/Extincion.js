import './CSS/extincion.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import extincion1 from '../images/extincion1.jpg';
import extincion2 from '../images/extincion2.jpg';
import logo from '../images/logo.png';

function Extincion() {

    return (

        <div class="bodyExtincion">
        <><NavBar></NavBar>

            <Fragment>
                <div class="row rowExtincion">

                    <div class="card cardExtincion">
                        <div class="card-body">
                            <h5 class="card-title">Tortuga Carey</h5>
                            <p class="card-text">DESCRIPCION
                            </p>
                            <p class="card-text"><small class="text-body-secondary">tiempo de actualizacion</small></p>
                        </div>
                        <img src={extincion1} class="card-img-bottom" alt="..." />
                    </div>


                    <div class="card cardExtincion">
                        <div class="card-body">
                            <h5 class="card-title">Vaquita Marina</h5>
                            <p class="card-text">DESCRIPCION
                            </p>
                            <p class="card-text"><small class="text-body-secondary">tiempo de actualizacion</small></p>
                        </div>
                        <img src={extincion2} class="card-img-bottom" alt="..." />
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
export default Extincion;