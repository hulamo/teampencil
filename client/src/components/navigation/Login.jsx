import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
// import { users } from "../../../../routes/api/users";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    // console.log(formData);
    /*   if (password !== password2) {
      console.log("Contrasñas No Cuadran");
    } else {
      /*
      const newUser = {
        firstname,
        lastname,
        password,
        email
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };

        const body = JSON.stringify(newUser);
        console.log(newUser);
        const res = await axios.post("/api/users", body, config);

        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    
  } */
  };
  return (
    <Fragment>
      <MDBContainer>
        <MDBRow className="justify-content-md-center">
          <MDBCol md="4">
            <form onSubmit={e => onSubmit(e)}>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
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
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  icon="lock"
                  group
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                />
              </div>
              <MDBRow className="justify-content-md-center">
                <MDBCol md="6">
                  <div className="text-center">
                    <MDBBtn type="submit" color="light">
                      Login
                    </MDBBtn>
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
