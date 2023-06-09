import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CSS/registroSesion.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Formulario = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({});
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:9000/agregar/formulario', data);
      reset();
      console.log('Los datos del formulario se han enviado correctamente');
      navigate('/iniciar');
    } catch (error) {
      console.error('Error al enviar los datos del formulario:', error);
    }
  };

  return (
    <div className="falsobody">
      <div className="container style={{ margin: '0% 25% 0% 25%' }}">
        <Form onSubmit={handleSubmit(onSubmit)} className="row py-2 bg-white">
          <Form.Label className="tituloRegistro">REGISTRO DE USUARIO</Form.Label>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className="barra">Nombre Completo</Form.Label>
            <Form.Control className="barra" placeholder="Nombre, Apellido Materno, Apellido Paterno" isInvalid={errors.nombre} {...register('nombre', {
              required: true,
              maxLength: 50
            })} />
            {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
            {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 50 caracteres</p>}
          </Form.Group>

          <Row className="mb-3 prueba">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="example@example.com" isInvalid={errors.email} {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              })} />
              {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
              {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" isInvalid={errors.contrasena} placeholder="Password" {...register('contrasena', {
                required: true
              })}
              />
              {errors.contrasena?.type === 'required' && <p>El campo contraseña es requerido</p>}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 datosRegistro" controlId="formGridAddress1">
            <Form.Label className="barra">Address</Form.Label>
            <Form.Control className="barra" placeholder="Calle, direccion" isInvalid={errors.direccion} {...register('direccion', {
              required: true,
              maxLength: 100
            })} />
            {errors.direccion?.type === 'required' && <p >El campo direccion es requerido</p>}
            {errors.direccion?.type === 'maxLength' && <p>El campo direccion debe tener menos de 100 caracteres</p>}
          </Form.Group>

          <Row className="mb-3 prueba">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad/Pais</Form.Label>
              <Form.Control isInvalid={errors.pais} {...register('pais', {
                required: true
              })} />
              {errors.pais?.type === 'required' && <p>El campo pais es requerido</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Genero</Form.Label>
              <Form.Select defaultValue="Choose..." {...register('genero', { required: true })}>
                <option value="">Seleccionar...</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="No Binario">No Binario</option>
                <option value="Otros">Otros</option>
              </Form.Select>
              {errors.genero?.type === 'required' && <p>El campo género es requerido</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Telefono</Form.Label>
              <Form.Control isInvalid={errors.telefono} {...register('telefono', {
                required: true,
                pattern: /^[0-9]{10}$/ // Patrón para verificar 10 dígitos numéricos
              })}
              />
              {errors.telefono?.type === 'required' && <p>El campo teléfono es requerido</p>}
              {errors.telefono?.type === 'pattern' && <p>El formato del teléfono es incorrecto</p>}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 datosRegistro" id="formGridCheckbox">
            <Form.Check className="barra" type="checkbox" label="Aceptar terminos y condiciones" />
          </Form.Group>

          <Form.Group className="mb-3 captcha">
            <div class="g-recaptcha" data-sitekey="6Lcv5swmAAAAAC5MDrJJsVQAOfnOAAdxDowqG44V">
            </div>
          </Form.Group>

          <div className="button-container">
            <Button className="buttonRegistro" type="submit" onClick={handleSubmit}>
              Enviar
            </Button>
            <Button className="buttonRegistro" type="button" onClick={handleGoBack}>
              Volver atras
            </Button>

          </div>
        </Form>


      </div>
    </div>
  );
}

export default Formulario;