import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from 'react-onsenui'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import './Login.css'
import logo from '../../assets/images/default.jpg'
import { APILogin } from '../../api/v1'
import ToastAlert from '../ToastAlert/ToastAlert'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      redirect: false,
      typePassworInput: 'password',
      visibleEye: true
    }
  }

  login = async () => {
    const response = await APILogin({
      user: this.state.user,
      password: this.state.password,
    })

    this.child.showToast(response)
    this.setState({
      user: '',
      password: ''
    })

    if(response.success === 1) {
      const cookies = new Cookies()
      cookies.set('token', response.data.token, { path: '/' })
      setTimeout(() => {
        this.setState({
          redirect: true
        })
      }, 1500)
    }
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
    if (this.state.redirect) {
      return <Redirect to={`/Quizzes`} />
    }

    return (
      <main className="login w-100 h-100 center-x wrap txt-white bg-blue-dark">
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
                  <p className="w-100 fs-13px txt-gray">Nombre de usuario o correo</p>
                  <Input className="w-100 center-x txt-white" modifier="material" type="text" placeholder="jhondoe" value={this.state.user} onChange={event => this.handleChangeInput({ user: event.target.value })} />
                </div>
              </ons-col>
              <ons-col width="100%">
                <div className="w-100 center-x mt-20px wrap p-relative">
                  <p className="w-100 fs-13px txt-gray">Contraseña</p>
                  <Input className="w-100 txt-white" modifier="material" type={this.state.typePassworInput} placeholder="********************" value={this.state.password} onChange={(event) => this.handleChangeInput({ password: event.target.value })} />
                  <VisibilityIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${this.state.visibleEye ? 'd-none' : 'd-block'}`} onClick={this.handleClickEye} />
                  <VisibilityOffIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${!this.state.visibleEye ? 'd-none' : 'd-block'}`} onClick={this.handleClickEye} />
                </div>
              </ons-col>
              <ons-col>
                <div className="w-100 right">
                  <span className="m-0 py-20px fs-13px txt-gray hover-link">¿Se te olvido la contraseña?</span>
                </div>
              </ons-col>
              <ons-col width="100%">
                <div className="m-0 center-x round-30px">
                  <Button className="hover-btn round-30px fs-15px bg-none border-1px" modifier="large--cta" onClick={this.login}>Entrar</Button>
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
        {/* Lo dejo comentado por que puede ser útil más adelante. */}
        {/* <section className="row-end w-100 h-auto">
          <Link to={'/Quizzes'}>
            <Button className="hover-btn fs-15px" modifier="large--cta">Iniciar sesión con facebook</Button>
          </Link>
        </section> */}
        <ToastAlert onRef={ref => (this.child = ref)} />
      </main>
    );
  }
}

export default Login;