import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';

import {Link} from 'react-router-dom';



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
              
            <img src={logo}class="logo" ></img><a className="navbar-brand" >EcoSfera</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* <!-- <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li> --> */}
                <li className="nav-item"><a class="nav-link" href="noticias.html">Noticias</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Ecosistemas</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="ecosistemas.html">Desértico</a></li>
                    <li><a className="dropdown-item" href="ecosistemas.html">Marino</a></li>
                    <li><a className="dropdown-item" href="ecosistemas.html">Terrestre</a></li>
                  </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Animales</a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="animalpordia.html">Animal por dia</a></li>
                <li><a className="dropdown-item" href="animales.html">Animales por ecosistema</a></li>
                <li><a className="dropdown-item" href="extincion.html">Animales en peligro de extinción</a></li>
                </ul>
            </li>
                <li className="nav-item">
                  <a className="nav-link" href="comoactuar.html">¿Cómo actuar?</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Ecosistemas">Ayudanos</Link>
                  {/* <a class="nav-link" href="ayudanos.html">Ayúdanos</a> */}
                </li>
              </ul>
            </div>

            <div>
              <ul className="nav justify-content-end">
                 <li className="nav-item">
                      <a className="nav-link text-black" href="inicio.html">Ingresar</a>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link text-black" href="registro.html">Registrarse</a>
                 </li>
              </ul>
            </div>

        </div>
    </nav>
  );
}

export default NavBar;
