import './CSS/extincion.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import extincion1 from '../images/extincion1.jpg';
import extincion2 from '../images/extincion2.jpg';

function Extincion() {

    return (

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

            </Fragment>

        </>


    );
}

export default Extincion;