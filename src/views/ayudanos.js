import './CSS/ayudanos.css';
import NavBar from "./navBar";
import { Fragment } from "react";

import ayudanos from '../images/ayudanos1.png';
import logo from '../images/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

function Ayudanos() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm({});


    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:9000/agregar', data);
            reset();
            console.log('Los datos del formulario se han enviado correctamente');
        } catch (error) {
            console.error('Error al enviar los datos del formulario:', error);
        }
    };

    return (

        <div class="bodyAyudanos">
        <><NavBar></NavBar>

            <Fragment class="bodyAyudanos">
                <div class="row rowAyudanos">
                    <img src={ayudanos} class="img-fluid-Ayudanos" alt="..." />

                    <div class="card cardAyudanos">
                        <div class="card-body">
                            <h5 class="tituloAyudanos card-title">Formulario para enviar noticias</h5>
                            <p class="card-text">
                            </p>
                            <p class="card-text"><small class="text-body-secondary"></small></p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="formAyudanos row py-2 ">

                            <label class="labelAyudanos" >Nombre</label>
                            <input class="inputAyudanos" placeholder="Nombre" isInvalid={errors.nombre} {...register('nombre', {
                                required: true,
                                maxLength: 50
                            })} />
                            {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                            {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 50 caracteres</p>}

                            <label class="labelAyudanos">Noticia</label>
                            <input class="inputAyudanos" placeholder="Descripcion" isInvalid={errors.descripcion} {...register('descripcion', {
                                required: true,
                                
                            })} />
                            {errors.descripcion?.type === 'required' && <p>El campo descripcion es requerido</p>}
                            

                            <Button className="botonNoticas" type="submit" onClick={handleSubmit}>
                                Enviar
                            </Button>

                        </form>

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
        </div>

    );
}

export default Ayudanos;