import NavBar from "./navBar";
import { Fragment } from "react";
import './CSS/animales.css';

import tortuga from '../images/tortuga.jpg'
import tiburon from '../images/tiburon.jpg'
import caballito from '../images/caballito.jpg'
import pinguino from '../images/pinguino.jpg'

function animales() {

    return (

        <body class="bodyAnimales">

        <><NavBar></NavBar>

            <Fragment>
                <div class="row Animales">


                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <div class="col">
                            <div class="card h-100 cardAnimales">
                                <img src={caballito} class="card-img-top-Animales" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Caballito de Mar</h5>
                                        <p class="card-text">El caballito de mar común es una especie de pez de la familia Syngnathidae. Es una de las tres especies de caballito de mar presentes en Europa y el mar Mediterráneo.</p>
                                        <p class="card-text">Los caballitos de mar son peces muy amenazados en todos los mares del planeta. No solo por ser muy sensibles a la contaminación, sino también porque se capturan grandes cantidades para su utilización ornamental en acuarios y en la medicina oriental.</p>
                                    </div>

                            </div>
                        </div>


                        <div class="col">
                            <div class="card h-100 cardAnimales">
                                <img src={pinguino} class="card-img-top-Animales" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Pinguino</h5>
                                        <p class="card-text">El pingüino emperador es una especie de ave esfenisciforme de la familia Spheniscidae. Esta especie, endémica de la Antártida, es la de mayor tamaño y peso de todos los pingüinos. El macho y la hembra son similares en plumaje y tamaño; pueden superar los 120 cm de altura y pesan entre 20 y 45 kg.</p>
                                        <p class="card-text">El pingüino emperador, desde hace bastante tiempo, está en riesgo de vida debido a la rápida reducción del hielo marino producto del cambio climático y el calentamiento global. Por este motivo, ha sido incluido en la lista de especies amenazadas</p>
                                    </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="card h-100 cardAnimales">
                                <img src={tiburon} class="card-img-top-Animales" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Tiburon Ballena</h5>
                                        <p class="card-text">El tiburón ballena es una especie de elasmobranquio orectolobiforme, ​ único miembro de la familia Rhincodontidae y del género Rhincodon; es el pez existente más grande del mundo, con aproximadamente 12 m de longitud. Presenta una alimentación por filtración. Habita en aguas cálidas tropicales y subtropicales</p>
                                        <p class="card-text">Aunque los tiburones ballena no representan ningún riesgo para los seres humanos y son una especie protegida en muchos de los países y regiones en las que habitan, son indiscriminadamente asesinados para vender sus cuerpos por 3 mil o 4 mil dólares americanos.</p>
                                    </div>

                            </div>
                        </div>


                        <div class="col">
                            <div class="card h-100 cardAnimales">
                                <img src={tortuga} class="card-img-top-Animales" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Tortuga Marina</h5>
                                        <p class="card-text">Las tortugas marinas son grandes reptiles con pulmones que habitan los mares tropicales y subtropicales a lo largo del mundo. Sus conchas se componen de una parte superior (caparazón) y una parte inferior (plastrón). Unas escamas duras (llamadas escudos) cubren su caparazón y piel (menos en la tortuga baula) y el número de estos escudos y su disposición nos ayudan a determinar las diferentes especies..</p>
                                        <p className="card-text">Las tortugas carey y bastarda están clasificadas como “en peligro crítico” en la Lista Roja de La Unión Internacional por la Conservación de la Naturaleza (UICN), la tortuga verde está considera “en peligro” y las tortugas laúd, boba y olivácea “vulnerables”</p>
                                        </div>

                            </div>
                        </div>


                    </div>


                </div>

            </Fragment>

        </>
        </body>


    );
}

export default animales;
