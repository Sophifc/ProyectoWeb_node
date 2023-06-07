import './CSS/ecosistema.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import eco1 from '../images/eco1.jpg';
import eco2 from '../images/eco2.jpg';
import eco3 from '../images/eco3.jpg';
import flecha from '../images/flecha.png';

function Ecosistema() {
    return (
        <><NavBar></NavBar>

        <Fragment>
                <div class="container">

                    <div class="row">
                        <div class="col-lg-7">


                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ECOSISTEMA MARINO</h5>
                                    <p class="card-text">DESCRIPCION
                                    </p>
                                    <p class="card-text"><small class="text-body-secondary">tiempo de actualizacion</small></p>
                                </div>
                                <img src={eco1} class="card-img-bottom" alt="..."/>
                            </div>

      
                            <div class="card mb-3" >
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={flecha} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <button type="submit" id="check">Vamos a ver su Fauna</button>
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>

                        <div class="col-lg-5">

                            <div class="card mb-3">
                                <img src={eco3} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                            </div>


                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                                <img src={eco2} class="card-img-bottom" alt="..."/>
                            </div>


                        </div>

                    </div>



                </div>


            </Fragment>


        
        </>
        );
    }
    
    export default Ecosistema;
           