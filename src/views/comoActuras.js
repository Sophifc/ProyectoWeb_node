
import NavBar from "./navBar";
import './CSS/comoActuar.css';
import { Fragment } from "react";


function ComoActuar() {

    return (

        <><NavBar></NavBar>

            <Fragment>

                <div class="container">

                    <div class="row-ComoActuar">

                        <div class="col-ComoActuar">


                            <div class="card text-white bg-danger mb-3" >
                                <div class="card-header">Recomendacion</div>
                                <div class="card-body">
                                    <h5 class="card-title">Tipo de recomendacion</h5>
                                    <p class="card-text">Descripcion.</p>
                                </div>
                            </div>



                            <div class="card text-dark bg-warning mb-3" >
                                <div class="card-header">Recomendacion</div>
                                <div class="card-body">
                                    <h5 class="card-title">Tipo recomendacion</h5>
                                    <p class="card-text">Descripcion.</p>
                                </div>
                            </div>


                            <div class="card text-dark bg-light mb-3">
                                <div class="card-header">Recomendacion</div>
                                <div class="card-body">
                                    <h5 class="card-title">Tipo de recomendacion</h5>
                                    <p class="card-text">Descripcion.</p>
                                </div>
                            </div>
                            
                            <div class="card text-white bg-dark mb-3" >
                                <div class="card-header">Recomendacion</div>
                                <div class="card-body">
                                    <h5 class="card-title">Tipo de recomendacion</h5>
                                    <p class="card-text">Descripcion.</p>
                                </div>
                            </div>


                        </div>



                        <div class="col">

                            <div class="row">

                                <div class="caja-ComoActuar">
                                    <h2 class="h2-ComoActuar">¿Cuanto has ayudado?</h2>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="check1"/>
                                    </div>
                                    <label class="form-control">Idea1</label>
                                </div>

                                 <div class="input-group mb-3">
                                    <div class="input-group-text">
                                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="check1"/>
                                    </div>
                                    <label class="form-control">Idea2</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="check1"/>
                                    </div>
                                    <label class="form-control">Idea3</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="check1"/>
                                    </div>
                                    <label class="form-control">Idea4</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="check1"/>
                                    </div>
                                    <label class="form-control">Idea5</label>
                                </div> 

                            </div>

                            <div class="row" >

                                <div class="caja-ComoActuar">
                                    <h2 class="h2-ComoActuar">Resultados</h2>
                                </div>

                                <div class="caja2-ComoActuar">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress1"></div>
                                    </div>
                                </div>

                                <div class="caja2-ComoActuar">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress2"></div>
                                    </div>
                                </div>


                                <div class="caja2-ComoActuar">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress3"></div>
                                    </div>
                                </div>

                                <div class="caja2-ComoActuar">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress4"></div>
                                    </div>
                                </div>

                                <div class="caja2-ComoActuar">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress5"></div>
                                    </div>
                                </div>

                            </div>





                        </div>



                    </div>


                </div>

            </Fragment>



        </>



    );
}

export default ComoActuar;