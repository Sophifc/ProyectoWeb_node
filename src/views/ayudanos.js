import NavBar from "./navBar";
import { Fragment } from "react";

import formulario from '../images/formulario.jpg';
import ayudanos from '../images/ayudanos1.png';

function Ayudanos() {

    return (

        <><NavBar></NavBar>

            <Fragment>
                <div class="row">
                    <img src={ayudanos} class="img-fluid" alt="..."/>

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Formulario para agregar comentarios</h5>
                                <p class="card-text">PROXIMAMENTE
                                </p>
                                <p class="card-text"><small class="text-body-secondary">Ultimo comentario enviado hace...</small></p>
                            </div>
                            <img src={formulario} class="card-img-bottom" alt="..."/>
                        </div>
                </div>
            </Fragment>

        </>


    );
}

export default Ayudanos;