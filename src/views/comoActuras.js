import data from './recomendacion.json';
import NavBar from "./navBar";
import { Fragment } from "react";

function ComoActuar() {

    return (
        <><NavBar></NavBar>
            <Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div className="col">
                                {data.map((recomendacion) => (
                                    <div key={recomendacion.id} className="card text-white bg-danger mb-3">
                                        <div className="card-header">Recomendacion</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{recomendacion.titulo}</h5>
                                            <p className="card-text">{recomendacion.descripcion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div class="col">

                            <div class="row">

                                <div class="caja">
                                    <h2>¿Cuanto has ayudado?</h2>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="check1" />
                                    </div>
                                    <label class="form-control">Idea1</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">

                                    </div>
                                    <label class="form-control">Idea2</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">

                                    </div>
                                    <label class="form-control">Idea3</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                    </div>
                                    <label class="form-control">Idea4</label>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-text">
                                    </div>
                                    <label class="form-control">Idea5</label>
                                </div>

                            </div>

                            <div class="row" >

                                <div class="caja">
                                    <h2>Resultados</h2>
                                </div>

                                <div class="caja2">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress1"></div>
                                    </div>
                                </div>

                                <div class="caja2">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress2"></div>
                                    </div>
                                </div>


                                <div class="caja2">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress3"></div>
                                    </div>
                                </div>

                                <div class="caja2">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress4"></div>
                                    </div>
                                </div>

                                <div class="caja2">
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