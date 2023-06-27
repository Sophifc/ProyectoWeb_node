import { Link } from 'react-router-dom';
import NavBar from "./navBar";
import { Fragment } from "react";
import './CSS/ecosistemaSelva.css'
import eco1 from '../images/jaguar.jpg';
import eco2 from '../images/tucan.jpg';
import eco3 from '../images/selva.jpg';
import flecha from '../images/flecha.png';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';

function EcosistemaSelva() {
    return (
        
        <body class="bodyEcosistemaSelva">
        <><NavBar></NavBar>

        <Fragment>
                <div class="container">

                    <div class="row rowEcosistema">
                        <div class="col-lg-7 colEcosistema">


                            <div class="card cardEcosistemaSelva">
                                <div class="card-body">
                                    <h5 class="card-title">ECOSISTEMA SELVATICO</h5>
                                    <p class="card-text">El ecosistema Selva o bosque lluvioso tropical es el más rico en biodiversidad, es uno de los garantes del equilibrio ecológico, reguladores y retenedores de agua dulce y de suelos, así como “pulmones” de la Tierra, ya que toman dióxido de carbono del aire, transformándolo en el vital oxigeno para la vida
                                    </p>
                                    
                                </div>
                                <img src={eco3} class="card-img-bottom cardImgBajoSelva" alt="..."/>
                            </div>

      
                            <div class="card mb-3 cardBoton cardEcosistemaSelva" >
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

                            <div class="card mb-3 cardEcosistemaSelva">
                                <img src={eco1} class="card-img-top cardImgAltoSelva" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Jaguar</h5>
                                        <p class="card-text">La Belleza del Jaguar. Tosco y macizo, con un cuerpo robusto y las extremidades sólidas y más bien cortas. Su cabeza es voluminosa, tiene la mandíbula prominente, el color de sus ojos varía de amarillo oro a un amarillo verdoso y sus orejas son relativamente pequeñas y redondeadas. Este hermoso mamífero de 45 a 130 kg de peso, 1.70 a 2.30 m de longitud desde la nariz hasta la punta de la cola y con un promedio de vida de 20 años, presenta pelaje color café amarillento con rosetas negras de forma irregular y en algunos casos negro, es ágil para correr y nadar grandes distancias.</p>
                                        
                                    </div>
                            </div>


                            <div class="card cardEcosistemaSelva">
                                <div class="card-body">
                                    <h5 class="card-title">Tucan</h5>
                                    <p class="card-text">Los tucanes ​​ son una familia de aves piciformes muy amplia, ya que alberga seis géneros y cuarenta y dos especies diferentes. Se caracterizan por poseer un pico muy desarrollado y de vivos colores. Miden entre 18 y 65 cm, siendo el tucán toco el de mayor tamaño.Normalmente prefieren las selvas húmedas tropicales de baja altitud, aunque también existen especies adaptadas a los bosques templados a 3000 msnm. Sus nidos suelen estar en agujeros dentro de los árboles. Es una especie sedentaria, que habita la misma región toda su vida.</p>
                                    
                                </div>
                                <img src={eco2} class="card-img-bottom cardImgBajoSelva" alt="..."/>
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
                


            </Fragment>

          


        
        </>
        </body>

        
        );
    }
    
    export default EcosistemaSelva;
           
           
