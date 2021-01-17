import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from 'react-onsenui'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import logo from '../../assets/images/default.jpg'
import { APICreateUser } from '../../api/v1'
import ToastAlert from '../ToastAlert/ToastAlert'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      typePassworInput: 'password',
      visibleEye: true
    }
  }

  createUser = async () => {
    const response = await APICreateUser({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })

    this.child.showToast(response)
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  handleChangeInput = data => {
    this.setState(data)
  }

  handleClickEye = () => {
    this.setState({
      typePassworInput: (this.state.typePassworInput === 'password') ? 'text' : 'password',
      visibleEye: !this.state.visibleEye
    })
  }

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
                  <p className="w-100 fs-13px txt-gray">Nombre de usuario</p>
                  <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder='jhondoe' value={this.state.username} onChange={(event) => this.handleChangeInput({ username: event.target.value })} />
                </div>
              </ons-col>
              <ons-col width="100%">
                <div className="w-100 mt-20px">
                  <p className="w-100 fs-13px txt-gray">Correo electronico</p>
                  <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder='jhondoe@email.com' value={this.state.email} onChange={(event) => this.handleChangeInput({ email: event.target.value })} />
                </div>
              </ons-col>
              <ons-col width="100%">
                <div className="w-100 mt-20px p-relative">
                  <p className="w-100 fs-13px txt-gray">Contraseña</p>
                  <Input className="w-100 txt-white" modifier="material" type={this.state.typePassworInput} placeholder='********************' value={this.state.password} onChange={(event) => this.handleChangeInput({ password: event.target.value })} />
                  <VisibilityIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${this.state.visibleEye ? 'd-none' : 'd-block'}`} onClick={this.handleClickEye} />
                  <VisibilityOffIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${!this.state.visibleEye ? 'd-none' : 'd-block'}`} onClick={this.handleClickEye} />
                </div>
              </ons-col>
              <div className="mt-20px">
                <ons-col width="100%">
                  <div className="m-0 center-x round-30px">
                    <Button className="hover-btn round-30px fs-15px bg-none border-1px" modifier="large--cta" onClick={this.createUser}>Registrar</Button>
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
        <ToastAlert onRef={ref => (this.child = ref)} />
      </main>
    )
  }
}

export default Signup;
