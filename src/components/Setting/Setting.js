import React, { Component } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Input, Button, Checkbox } from 'react-onsenui'
import ToastAlert from '../ToastAlert/ToastAlert'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { APIUpdateUserData } from '../../api/v1'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChanges: false,
      typePassworInput1: 'password',
      typePassworInput2: 'password',
      visibleEye1: true,
      visibleEye2: true,
      newUsername: '',
      newEmail: '',
      password: '',
      newPassword: '',
      allow: false
    }
  }

  handleSelectedSetting = type => {
    this.setState({
      activeChanges: true
    })
  }

  handleClickEye = type => {
    if (type === 1) {
      this.setState({
        typePassworInput1: (this.state.typePassworInput1 === 'password') ? 'text' : 'password',
        visibleEye1: !this.state.visibleEye1
      })
    }
    if (type === 2) {
      this.setState({
        typePassworInput2: (this.state.typePassworInput2 === 'password') ? 'text' : 'password',
        visibleEye2: !this.state.visibleEye2
      })
    }
  }

  handleChangeInput = data => {
    this.setState(data)
  }

  renderSetting = () => {
    return (
      <div className="mb-10px w-100 h-33 flex bg-gray-opacity px-10px b-box round-10px">
        <div className="w-auto h-100 center-y">
          <div className="w-auto h-auto txt-gray border-1px round-50 center-xy p-8px bg-none">
            {this.props.icon}
          </div>
        </div>
        <div className="w-90 center-y h-100">
          <div className="w-100 h-auto px-10px b-box">
            <p className="p-0 m-0 txt-white rubik-bold fs-14px">{this.props.title}</p>
            <p className="p-0 m-0 txt-gray fs-13px">{this.props.info}</p>
          </div>
        </div>
        <div className="center-xy w-auto h-100 hover-btn" onClick={() => this.handleSelectedSetting(this.props.type)}>
          <div className="w-100 h-auto right">
            <ArrowForwardIosIcon className="txt-gray" />
          </div>
        </div>
        <ToastAlert onRef={ref => (this.child = ref)} />
      </div>
    )
  }

  /** Se creara una función para cada elemento debido a que después se puede agregar su respectiva validación. **/
  renderUsernameChange = () => {
    return (
      <div className="w-100 h-auto mb-10px">
        <Input className="w-100 txt-white" modifier="material" type="text" placeholder="jhondoe" onChange={event => this.handleChangeInput({ newUsername: event.target.value })} />
        <div className="mt-5px flex right">
          <Button className="bg-success hover-btn fs-12px w-33 mx-10px txt-center" onClick={() => this.handleClickSave('username')}>Guardar</Button>
          <Button className="bg-none border-1px hover-btn fs-12px w-33 txt-center" onClick={() => this.setState({ activeChanges: false })}>Cancelar</Button>
        </div>
      </div>
    )
  }

  renderEmailChange = () => {
    return (
      <div className="w-100 h-auto mb-10px">
        <Input className="w-100 txt-white" modifier="material" type="email" placeholder="jhon@doe.com" onChange={event => this.handleChangeInput({ email: event.target.value })} />
        <div className="mt-5px flex right">
          <Button className="bg-success hover-btn fs-12px w-33 mx-10px txt-center" onClick={() => this.handleClickSave('email')}>Guardar</Button>
          <Button className="bg-none border-1px hover-btn fs-12px w-33 txt-center" onClick={() => this.setState({ activeChanges: false })}>Cancelar</Button>
        </div>
      </div>
    )
  }

  renderPasswordChange = () => {
    return (
      <div className="w-100 h-auto mb-10px">
        <div className="p-relative">
          <p className="w-100 fs-13px txt-gray">Contraseña actual</p>
          <Input className="w-100 txt-white" modifier="material" type={this.state.typePassworInput1} placeholder="********************" onChange={event => this.handleChangeInput({ password: event.target.value })} />
          <VisibilityIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${this.state.visibleEye1 ? 'd-none' : 'd-block'}`} onClick={() => this.handleClickEye(1)} />
          <VisibilityOffIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${!this.state.visibleEye1 ? 'd-none' : 'd-block'}`} onClick={() => this.handleClickEye(1)} />
        </div>
        <div className="p-relative">
          <p className="w-100 fs-13px txt-gray">Nueva contraseña</p>
          <Input className="w-100 txt-white" modifier="material" type={this.state.typePassworInput2} placeholder="********************" onChange={event => this.handleChangeInput({ newPassword: event.target.value })} />
          <VisibilityIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${this.state.visibleEye2 ? 'd-none' : 'd-block'}`} onClick={() => this.handleClickEye(2)} />
          <VisibilityOffIcon className={`txt-gray eye form-control-feedback hover-btn h-50 right ${!this.state.visibleEye2 ? 'd-none' : 'd-block'}`} onClick={() => this.handleClickEye(2)} />
        </div>
        <div className="mt-5px flex right">
          <Button className="bg-success hover-btn fs-12px w-33 mx-10px txt-center" onClick={() => this.handleClickSave('password')}>Guardar</Button>
          <Button className="bg-none border-1px hover-btn fs-12px w-33 txt-center" onClick={() => this.setState({ activeChanges: false })}>Cancelar</Button>
        </div>
      </div>
    )
  }

  renderPushNotificationsChange = () => {
    return (
      <div className="mb-10px w-100 h-33 flex bg-gray-opacity px-10px b-box round-10px">
        <div className="w-auto h-100 center-y">
          <div className="w-auto h-auto txt-gray center-xy p-15px bg-none">
            <Checkbox
              onChange={event => { this.setState({ checked: event.target.checked }) }}
              modifier='material' />
          </div>
        </div>
        <div className="w-90 center-y h-100">
          <div className="w-100 h-auto px-10px b-box">
            <p className="p-0 m-0 txt-white rubik-bold fs-14px">Active notifications</p>
          </div>
        </div>
        <div className="center-xy w-auto h-100 hover-btn" onClick={() => this.setState({ activeChanges: false })}>
          <div className="w-100 h-auto right">
            <ArrowBackIosIcon className="txt-gray" />
          </div>
        </div>
        <ToastAlert onRef={ref => (this.child = ref)} />
      </div>
    )
  }

  handleClickSave = async type => {
    let response = null

    if (type === 'username') {
      console.log(this.state.newUsername)
      response = await APIUpdateUserData('username', { newUsername: this.state.newUsername })
    }
    if (type === 'email') {
      response = await APIUpdateUserData('email', { newEmail: this.state.newEmail })
    }
    if (type === 'password') {
      response = await APIUpdateUserData('password', { 
        password: this.state.password,
        newPassword: this.state.newPassword
      })
    }

    this.setState({
      activeChanges: false
    })
    setTimeout(() => this.child.showToast(response))
  }

  render() {
    if (!this.state.activeChanges) {
      return this.renderSetting()
    }
    if (this.props.type === "username") {
      return this.renderUsernameChange()
    }
    if (this.props.type === "email") {
      return this.renderEmailChange()
    }
    if (this.props.type === "password") {
      return this.renderPasswordChange()
    }
    if (this.props.type === 'push-notifications') {
      return this.renderPushNotificationsChange()
    }
  }
}

export default Setting;
