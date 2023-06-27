import './CSS/animalPorDia.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import pinguino from '../images/pinguino.jpg';
import logo from '../images/logo.png';

function AnimalPorDia() {

    return (

        <><NavBar></NavBar>

            <Fragment>
                <div className="bodyDia">
                <div className="container py-5 px-5">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={pinguino} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title py-2">Pingüino Emperador</h5>
                                    <p className="card-text px-2 py-2">Los pingüinos provienen de la familia de las aves ya que son aves marinas no voladoras distribuidas en el hemisferio sur</p>
                                    <p className="card-text px-2 py-2">Son bipedos, excelentes nadadores, su plumaje consta de 3 capas distintas, se comunican por graznidos, son sociables, formadores de extensas colonias y famosos por su monogamia</p>
                                    <p className="card-text px-2 py-2">En general el hemisferio sur, un lugar frio y marino</p>
                                    <p className="card-text px-2 py-2">Si se trabaja en un zoologico, lo mas importante es la temperatura, la cual debe estar entre -5ºC y 8ºC, ademas de una correcta alimentacion y un espacio limpio</p>
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
                </div>
                

            </Fragment>

        </>


    );
}

export default AnimalPorDia;
