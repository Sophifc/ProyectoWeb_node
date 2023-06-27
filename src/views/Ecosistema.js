import { Link } from 'react-router-dom';
import NavBar from "./navBar";
import { Fragment } from "react";
import './CSS/ecosistema.css'
import eco1 from '../images/eco1.jpg';
import eco2 from '../images/eco2.jpg';
import eco3 from '../images/eco3.jpg';
import flecha from '../images/flecha.png';
import Nav from 'react-bootstrap/Nav';

function Ecosistema() {
    return (
        
        <body class="bodyEcosistema">
        <><NavBar></NavBar>

        <Fragment>
                <div class="container">

                    <div class="row rowEcosistema">
                        <div class="col-lg-7 colEcosistema">


                            <div class="card cardEcosistema">
                                <div class="card-body">
                                    <h5 class="card-title">ECOSISTEMA MARINO</h5>
                                    <p class="card-text">DESCRIPCION
                                    </p>
                                    <p class="card-text"><small class="text-body-secondary">tiempo de actualizacion</small></p>
                                </div>
                                <img src={eco1} class="card-img-bottom cardImgBajo" alt="..."/>
                            </div>

      
                            <div class="card mb-3 cardBoton cardEcosistema" >
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={flecha} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8 col8Ecosistema">
                                        <div class="card-body">

                                            <div class="button-Ecosistema">
                                            <Nav.Link  as={Link} to="/animales" >Vamos a ver su fauna</Nav.Link>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>

                        <div class="col-lg-5">

                            <div class="card mb-3 cardEcosistema">
                                <img src={eco3} class="card-img-top cardImgAlto" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                            </div>


                            <div class="card cardEcosistema">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                                <img src={eco2} class="card-img-bottom cardImgBajo" alt="..."/>
                            </div>


                        </div>

                    </div>



                </div>


            </Fragment>

          


        
        </>
        </body>

        
        );
    }
    
    export default Ecosistema;
           
