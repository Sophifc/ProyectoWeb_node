import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CSS/inicioSesion.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from "react";
import decodificar from './validarRol';
import { Link } from 'react-router-dom';


function Login() {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({});
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleGoBack = () => {
    navigate(-1);
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
  
    try {
      // Enviar una solicitud a la API para verificar las credenciales
      const usuario = await axios.post('http://localhost:9000/login', { email, password });
  
      if (usuario.data.success) {
        console.log("Inicio de sesión exitoso");
        const token = usuario.data.token;
        localStorage.setItem('email', email);
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        const rol = decodificar();
        if (rol === 'admin') {
          navigate('/adminConfig')
        } else {
          navigate('/');
        }
      } else {
        console.log("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud de inicio de sesión:", error);
    }
  
    reset();
  };

  return (
    <div className="bodyInicio">
      <Form onSubmit={handleSubmit(onSubmit)} className="rowInicio">
        <Form.Label className="tituloInicio">INICIO DE SESION</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className="placeholderInicio" type="email" placeholder="Ingrese su correo" isInvalid={errors.email} {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
          {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control className="placeholderInicio" type="password" placeholder="Ingrese su contraseña"
            {...register('password', { required: true })} />
          {errors.password?.type === 'required' && <p>El campo contraseña es requerido</p>}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuerdame" />
        </Form.Group> */}
        <Form.Group className="mb-3 captcha">
            <div class="g-recaptcha" data-sitekey="6Lcv5swmAAAAAC5MDrJJsVQAOfnOAAdxDowqG44V">
            </div>
          </Form.Group>
        <div className="button-container">
          <Button className="buttonInicio" type="submit" onClick={handleSubmit}>
            Enviar
          </Button>
          <Button className="buttonInicio" type="button" onClick={handleGoBack}>
            Atras
          </Button>
  
        </div>
        {/* <Form.Group>
          <Form.Label className="pInicio py-2">¿Olvidaste tu contraseña?</Form.Label>
        </Form.Group> */}
        <Form.Group>
          <Form.Label className="pInicio py-2"><Link to="/Registrarse">¿No tienes cuenta? Registrate</Link></Form.Label>
        </Form.Group>

      </Form>
    </div>
  );
}

export default Login;
