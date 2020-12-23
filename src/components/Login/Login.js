import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Input, Button } from "react-onsenui";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "../.././index.css"
import "./Login.css"

import logo from "../../assets/images/default.jpg"

class Login extends Component {
  render() {
    return (
      <main className="w-100 h-100 center-x wrap txt-white bg-blue-dark">
        <section className="w-85 h-90">
          <ons-row>
            <div className="w-100 mt-35px">
              <ons-col width="100%">
                <p className="center-x m-0">
                  <img src={logo} alt="Logo" width="75" height="75"></img>
                </p>
              </ons-col>
              <ons-col width="100%">
                <h2 className="center-x m-0 rubik-bold py-5px">Trading Quiz</h2>
              </ons-col>
              <ons-col width="100%">
                <span className="center-x m-0 fs-13px txt-gray">Inicia sesión para continuar</span>
              </ons-col>
            </div>
          </ons-row>

          <ons-row>
            <div className="w-100 mt-35px">
              <ons-col width="100%">
                <div>
                  <p className="w-100 fs-13px txt-gray">Correo electronico</p>
                  <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder="Ingresa tú correo electronico" />
                </div>
              </ons-col>
              <ons-col width="100%">
                <div className="w-100 center-x mt-20px wrap">
                  <p className="w-100 fs-13px txt-gray">Contraseña</p>
                  <Input className="w-100 txt-white" modifier="material" type="password" placeholder="Ingresa tú contraseña" />
                </div>
              </ons-col>
              <ons-col>
                <div className="w-100 right">
                  <span className="m-0 py-20px fs-13px txt-gray hover-link">¿Se te olvido la contraseña?</span>
                </div>
              </ons-col>
              <ons-col width="100%">
                <div className="m-0 center-x round-30px">
                  <Link className="w-100" to={"/Quizes"}>
                    <Button className="hover-btn round-30px fs-15px bg-none border-1px" modifier="large--cta">Entrar</Button>
                  </Link>
                </div>
                <div className="py-15px b-box">
                  <Link className="w-100" to={"/Signup"}>
                    <p className="p-0 m-0 txt-center fs-13px txt-gray">¿Aún no tienes cuenta?</p>
                  </Link>
                </div>
              </ons-col>
            </div>
          </ons-row>
        </section>

        <section className="row-end w-100 h-auto">
          <Button className="hover-btn fs-15px" modifier="large--cta">Iniciar sesión con facebook</Button>
        </section>
      </main>
    );
  }
}

export default Login;