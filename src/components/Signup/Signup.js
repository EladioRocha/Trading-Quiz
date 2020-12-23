import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Input, Button } from "react-onsenui"

import logo from "../../assets/images/default.jpg"

class Signup extends Component {
  render() {
    return (
      <main className="w-100 h-100 center-x wrap txt-white bg-blue-dark">
      <section className="w-85 h-90 overflow-auto">
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
              <span className="center-x m-0 fs-13px txt-gray">Registro</span>
            </ons-col>
          </div>
        </ons-row>
        <ons-row>
          <div className="w-100 mt-20px">
            <ons-col width="100%">
              <div className="w-100 mt-20px">
                <p className="w-100 fs-13px txt-gray">Nombre completo</p>
                <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder="Jhon Doe Doe" />
              </div>
            </ons-col>
            <ons-col width="100%">
              <div className="w-100 mt-20px">
                <p className="w-100 fs-13px txt-gray">Nombre de usuario</p>
                <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder="JhonDoe99" />
              </div>
            </ons-col>
            <ons-col width="100%">
              <div className="w-100 mt-20px">
                <p className="w-100 fs-13px txt-gray">Correo electronico</p>
                <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder="jhon@doe.com" />
              </div>
            </ons-col>
            <ons-col width="100%">
              <div className="w-100 mt-20px">
                <p className="w-100 fs-13px txt-gray">Contraseña</p>
                <Input className="w-100 txt-white" modifier="material" type="password" placeholder="********************" />
              </div>
            </ons-col>
            <div className="mt-20px">
              <ons-col width="100%">
                <div className="m-0 center-x round-30px">
                  <Link className="w-100" to={"/Quizes"}>
                    <Button className="hover-btn round-30px fs-15px bg-none border-1px" modifier="large--cta">Registrar</Button>
                  </Link>
                </div>
                <div className="py-15px b-box">
                  <Link className="w-100" to={"/"}>
                    <p className="p-0 m-0 txt-center fs-13px txt-gray">¿Ya tienes cuenta?</p>
                  </Link>
                </div>
              </ons-col>
            </div>
          </div>
        </ons-row>
      </section>
      </main>
    )
  }
}

export default Signup;
