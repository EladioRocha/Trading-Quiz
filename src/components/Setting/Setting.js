import React, { Component } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Input, Button, Checkbox, Radio } from 'react-onsenui'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Cookies from 'universal-cookie'
import { APIUpdateUserData } from '../../api/v1'
import ToastAlert from '../ToastAlert/ToastAlert'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.cookies = new Cookies()
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
      allowNotifications: true,
      language: this.cookies.get('language'),
      iso: this.cookies.get('iso'),
      text: {
        spanish: {
          es: 'Español',
          en: 'Spanish'
        },
        english: {
          es: 'Ingles',
          en: 'English'
        },
        activeNotifications: {
          es: 'Activar notificaciones',
          en: 'Active notifications'
        },
        buttonSave: {
          es: 'Guardar',
          en: 'Save'
        },
        buttonCancel: {
          es: 'Cancelar',
          en: 'Cancel'
        }
      }
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
          <div className="w-100 h-auto txt-gray border-1px round-50 center-xy p-8px bg-none">
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
      </div>
    )
  }

  handleCheckboxSettings = (type, isOn, language, iso) => {
    let response = null
    if (type === 'push-notifications') {
      this.setState({
        allowNotifications: !this.state.allowNotifications
      })
      response = { success: 1, message: 'Estado de notificaciones actualizado' }
    }
    if (type === 'language' && isOn === 'on') {
      this.cookies.set('language', language)
      this.cookies.set('iso', iso)
      this.setState({
        language,
        iso,
      })
      this.props.data({ language, iso })
      response = { success: 1, message: 'Language changed successfully' }
    }

    this.child.showToast(response)
  }

  /** Se creara una función para cada elemento debido a que después se puede agregar su respectiva validación. **/
  renderUsernameChange = () => {
    console.log('ENTRO AQUI', this.state.language, this.state.iso)
    return (
      <div className="w-100 h-auto mb-10px">
        <Input className="w-100 txt-white" modifier="material" type="text" placeholder="jhondoe" onChange={event => this.handleChangeInput({ newUsername: event.target.value })} />
        <div className="mt-5px flex right">
          <Button className="round-30px bg-success hover-btn fs-12px w-33 mx-10px txt-center" onClick={() => this.handleClickSave('username')}>{this.state.text.buttonSave[this.cookies.get('iso')]}</Button>
          <Button className="round-30px bg-none border-1px hover-btn fs-12px w-33 txt-center" onClick={() => this.setState({ activeChanges: false })}>{this.state.text.buttonCancel[this.cookies.get('iso')]}</Button>
        </div>
        <ToastAlert onRef={ref => this.child = ref} />
      </div>
    )
  }

  renderEmailChange = () => {
    return (
      <div className="w-100 h-auto mb-10px">
        <Input className="w-100 txt-white" modifier="material" type="email" placeholder="jhon@doe.com" onChange={event => this.handleChangeInput({ newEmail: event.target.value })} />
        <div className="mt-5px flex right">
          <Button className="round-30px bg-success hover-btn fs-12px w-33 mx-10px txt-center" onClick={() => this.handleClickSave('email')}>{this.state.text.buttonSave[this.cookies.get('iso')]}</Button>
          <Button className="round-30px bg-none border-1px hover-btn fs-12px w-33 txt-center" onClick={() => this.setState({ activeChanges: false })}>{this.state.text.buttonCancel[this.cookies.get('iso')]}</Button>
        </div>
        <ToastAlert onRef={ref => this.child = ref} />
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
          <Button className="round-30px bg-success hover-btn fs-12px w-33 mx-10px txt-center" onClick={() => this.handleClickSave('password')}>{this.state.text.buttonSave[this.cookies.get('iso')]}</Button>
          <Button className="round-30px bg-none border-1px hover-btn fs-12px w-33 txt-center" onClick={() => this.setState({ activeChanges: false })}>{this.state.text.buttonCancel[this.cookies.get('iso')]}</Button>
        </div>
        <ToastAlert onRef={ref => this.child = ref} />
      </div>
    )
  }

  renderPushNotificationsChange = () => {
    return (
      <section className="mb-10px h-33 round-10px">
        <div className="mb-10px w-100 h-100 flex bg-gray-opacity px-10px b-box round-10px">
          <div className="w-100 h-100 overflow-auto">
            <div className="w-100 h-100 wrap txt-gray center-x px-15px b-box bg-none">
              <div className="flex w-100 h-100 py-10px b-box center-y">
                <Checkbox
                  checked={this.state.allowNotifications}
                  onChange={() => this.handleCheckboxSettings('push-notifications')}
                  modifier="material" />
                <div className="w-100 h-100 px-15px center-y">
                  <p className="p-0 m-0 txt-white rubik-bold fs-14px">{this.state.text.activeNotifications[this.state.iso]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="center-xy w-auto h-auto hover-btn" onClick={() => this.setState({ activeChanges: false })}>
            <div className="w-100 h-auto right">
              <ArrowBackIosIcon className="txt-gray" />
            </div>
          </div>
        </div>
        <ToastAlert onRef={ref => this.child = ref} />
      </section>
    )
  }

  renderLanguageChange = () => {
    return (
      <section className="mb-10px w-100 h-auto round-10px">
        <div className="mb-10px w-100 h-33 flex bg-gray-opacity px-10px b-box round-10px">
          <div className="w-90 h-100 overflow-auto">
            <div className="w-auto h-auto wrap txt-gray center-x px-15px b-box bg-none">
              <div className="flex w-100 py-10px b-box">
                <Radio
                  checked={(this.state.language === 'english') ? true : false}
                  onChange={event => this.handleCheckboxSettings('language', event.target.value, 'english', 'en')}
                  modifier="material" />
                <div className="w-100 h-auto px-10px center-y">
                  <p className="p-0 m-0 txt-white rubik-bold fs-14px">{this.state.text.english[this.state.iso]}</p>
                </div>
              </div>
              <div className="b-box flex w-100 py-10px b-box">
                <Radio
                  checked={(this.state.language === 'spanish') ? true : false}
                  onChange={event => this.handleCheckboxSettings('language', event.target.value, 'spanish', 'es')}
                  modifier="material" />
                <div className="w-100 h-auto px-10px center-y">
                  <p className="p-0 m-0 txt-white rubik-bold fs-14px">{this.state.text.spanish[this.state.iso]}</p>
                </div>
              </div>
              {/* <div className="b-box flex w-100 py-10px b-box">
                <Radio
                  checked={(this.state.language === "Russian") ? true : false}
                  onChange={event => this.handleCheckboxSettings('language', event.target.value, 'Russian')}
                  modifier="material" />
                <div className="w-100 h-auto px-10px center-y">
                  <p className="p-0 m-0 txt-white rubik-bold fs-14px">Russian</p>
                </div>
              </div>
              <div className="b-box flex w-100 py-10px b-box">
                <Radio
                  checked={(this.state.language === "Detusch") ? true : false}
                  onChange={event => this.handleCheckboxSettings('language', event.target.value, 'Detusch')}
                  modifier="material" />
                <div className="w-100 h-auto px-10px center-y">
                  <p className="p-0 m-0 txt-white rubik-bold fs-14px">Detusch</p>
                </div>
              </div>
              <div className="b-box flex w-100 py-10px b-box">
                <Radio
                  checked={(this.state.language === "Italian") ? true : false}
                  onChange={event => this.handleCheckboxSettings('language', event.target.value, 'Italian')}
                  modifier="material" />
                <div className="w-100 h-auto px-10px center-y">
                  <p className="p-0 m-0 txt-white rubik-bold fs-14px">Italian</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="center-xy w-100 h-auto hover-btn" onClick={() => this.setState({ activeChanges: false })}>
            <div className="w-100 h-auto right">
              <ArrowBackIosIcon className="txt-gray" />
            </div>
          </div>
        </div>
        <ToastAlert onRef={ref => this.child = ref} />
      </section>
    )
  }

  handleClickSave = async type => {
    let response = null

    if (type === 'username') {
      response = await APIUpdateUserData('username', { newUsername: this.state.newUsername })
      if (response.success === 1) {
        this.props.data({ username: response.data.username })
      }
    }
    if (type === 'email') {
      response = await APIUpdateUserData('email', { newEmail: this.state.newEmail })
      if (response.success === 1) {
        this.props.data({ email: response.data.email })
      }
    }
    if (type === 'username' || type === 'email' && response && response.success === 1) {
      this.cookies.set('token', response.data.token)
    }
    if (type === 'password') {
      response = await APIUpdateUserData('password', {
        password: this.state.password,
        newPassword: this.state.newPassword
      })
    }
    this.child.showToast(response)
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
    if (this.props.type === 'language') {
      return this.renderLanguageChange()
    }
  }
}

export default Setting;
