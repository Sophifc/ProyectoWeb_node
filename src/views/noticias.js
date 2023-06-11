
import NavBar from "./navBar";
import { Fragment } from "react";

import noticia1 from '../images/noticia1.jpg';
import noticia2 from '../images/noticia2.jpg';

function Noticias() {

    return (

        <><NavBar></NavBar>

            <Fragment>
                <div class="row">


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


            </Fragment>

        </>


    );
}

export default Noticias;