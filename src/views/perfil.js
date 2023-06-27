import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './CSS/perfilUsuario.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function PerfilUsuario() {
    const [data, setData] = useState({});

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('email');
        console.log(email)
        const response = await axios.post('http://localhost:9000/perfil', { email });
        console.log(response.data[0])
        setData(response.data[0]);
        //console.log(setData)
      } catch (error) {
        if (error.response) {
          console.log('Error de respuesta:', error.response.data);
          console.log('Código de estado:', error.response.status);
        } else if (error.request) {
          console.log('Error de solicitud:', error.request);
        } else {
          console.log('Error:', error.message);
        }
      }
    };

    return (
        <section className="vh-100 bodyPerfil">
        {data && Object.keys(data).length > 0 ? (
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                  <MDBRow className="g-0">
                    <MDBCol md="4" className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                      <MDBTypography tag="h5">{data.nombre}</MDBTypography>
                      <MDBCardText><Link to="/">Regresar</Link></MDBCardText>
                      <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                        <MDBTypography tag="h6">Informacion</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">ID</MDBTypography>
                            <MDBCardText className="text-muted">{data.id}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{data.correo}</MDBCardText>
                      </MDBCol>


                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Telefono</MDBTypography>
                        <MDBCardText className="text-muted">{data.telefono}</MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Direccion</MDBTypography>
                        <MDBCardText className="text-muted">{data.direccion}</MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Pais</MDBTypography>
                        <MDBCardText className="text-muted">{data.pais}</MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Genero</MDBTypography>
                        <MDBCardText className="text-muted">{data.genero}</MDBCardText>
                      </MDBCol>

                        </MDBRow>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
          <div>Datos no disponibles</div>
        )}
      </section>
    );
}

export default PerfilUsuario;