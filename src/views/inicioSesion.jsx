import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CSS/inicioSesion.css';
import users from './ArchivosJson/datos.json';
import { useNavigate } from 'react-router-dom';

function BasicExample() {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({});
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    // Verificar las credenciales en el archivo JSON
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      console.log("Inicio de sesión exitoso");
      navigate('/');
    } else {
      console.log("Credenciales inválidas");
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recuerdame" />
        </Form.Group>
        <div className="button-container">
          <Button className="buttonInicio" type="submit" onClick={handleSubmit}>
            Enviar
          </Button>
          <Button className="buttonInicio" type="button" onClick={handleGoBack}>
            Atras
          </Button>
  
        </div>
        <Form.Group>
          <Form.Label className="pInicio py-2">¿Olvidaste tu contraseña?</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="pInicio">¿No tienes cuenta? Registrate</Form.Label>
        </Form.Group>


      </Form>
    </div>
  );
}

export default BasicExample;