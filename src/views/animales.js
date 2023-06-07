import './CSS/animales.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import tortuga from '../images/tortuga.jpg'
import tiburon from '../images/tiburon.jpg'
import caballito from '../images/caballito.jpg'
import pinguino from '../images/pinguino.jpg'

function animales() {

    return (

        <><NavBar></NavBar>

            <Fragment>
                <div class="row">


                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <div class="col">
                            <div class="card h-100">
                                <img src={caballito} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Caballito de Mar</h5>
                                        <p class="card-text">Descripcion del animal.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="card h-100">
                                <img src={pinguino} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Pinguino</h5>
                                        <p class="card-text">Descripcion del animal.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="card h-100">
                                <img src={tiburon} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Tiburon Ballena</h5>
                                        <p class="card-text">Descripcion del animal.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="card h-100">
                                <img src={tortuga} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Tortuga Marina</h5>
                                        <p class="card-text">Descripcion del animal.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                            </div>
                        </div>


                    </div>


                </div>

            </Fragment>

        </>


    );
}

export default animales;