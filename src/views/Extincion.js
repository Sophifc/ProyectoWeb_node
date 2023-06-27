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
                            <p class="card-text">La tortuga carey, un animal sumamente migratorio, que vive en aguas tropicales, caracterizado por ser mas chico que otras tortugas, un par de garras en cada aleta y un llamativo caparazon, ha sido declarado en peligro critico de extincion principalmente gracias al impacto humano
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Publicado hace 3 horas</small></p>
                        </div>
                        <img src={extincion1} class="card-img-bottom" alt="..." />
                    </div>


                    <div class="card cardExtincion">
                        <div class="card-body">
                            <h5 class="card-title">Vaquita Marina</h5>
                            <p class="card-text">La vaquita marina, una de las 7 especies de marsopa, familiares de los delfines, caracterizado por ser robusto, de aletas pectorales largas, cabeza redonda y hocico corto, ha sido declarado al borde de la extincion, quedando al menos 19 de estas en el mundo
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Publicado hace 20 horas</small></p>
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
