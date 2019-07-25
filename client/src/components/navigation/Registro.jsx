import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    emial: "",
    contrasena: "",
    contrasena2: ""
  });

  const { nombre, apellido, email, contrasena, contrasena2 } = formData;

  const onChange = e =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <MDBContainer>
        <MDBRow className="justify-content-md-center">
          <MDBCol md="4">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={e => onChange(e)}
                  required
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Apellidos"
                  name="apellido"
                  value={apellido}
                  onChange={e => onChange(e)}
                  required
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Contraseña"
                  name="contrasena"
                  value={contrasena}
                  onChange={e => onChange(e)}
                  icon="lock"
                  group
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Confirma Contraseña"
                  name="contrasena2"
                  value={contrasena2}
                  onChange={e => onChange(e)}
                  icon="exclamation-triangle"
                  group
                  type="password"
                  validate
                />
              </div>
              <MDBRow className="justify-content-md-center">
                <MDBCol md="6">
                  <div className="text-center">
                    <MDBBtn color="light">Registro</MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="text-center">
                    <Link to="/login"> Login</Link>
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default Login;
