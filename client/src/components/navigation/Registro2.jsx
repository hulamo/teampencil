import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const Registro = () => {
  return (
    <MDBContainer>
      <MDBRow className="justify-content-md-center">
        <MDBCol md="5">
          <form>
            <p />
            <p className="h5 text-center mb-4">Registro</p>
            <div className="grey-text">
              <MDBInput
                label="Nombre"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Correo electrónico"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirma tu correo"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Contraseña"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Registro</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Registro;
