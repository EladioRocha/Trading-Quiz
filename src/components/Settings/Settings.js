import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-onsenui'
import EmailIcon from '@material-ui/icons/Email'
import Cookies from 'universal-cookie'
import PersonIcon from '@material-ui/icons/Person'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import NotificationsIcon from '@material-ui/icons/Notifications'
import LanguageIcon from '@material-ui/icons/Language';
import Setting from '../Setting/Setting'
import Header from '../Header/Header'

class Settings extends Component {
  constructor() {
    super()
    this.cookies = new Cookies()
    this.state = {
      redirect: false,
      username: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
      language: this.cookies.get('language'),
      iso: this.cookies.get('iso'),
      text: {
        account: {
          es: 'Cuenta',
          en: 'Account'
        },
        other: {
          es: 'Otros',
          en: 'Other'
        },
        updateUsername: {
          es: 'Actualizar nombre de usuario',
          en: 'Update username'
        },
        updateEmail: {
          es: 'Actualizar correo electornico',
          en: 'Update email'
        },
        updatePassword: {
          es: 'Actualizar contraseña',
          en: 'Update email'
        },
        pushNotification: {
          es: ['Notificaciones push', 'Para nuevas caracteristicas, regalos y más.'],
          en: ['Push notification', 'For new features, gifts and more.']
        },
        selectLanguage: {
          es: 'Seleccionar lenguaje',
          en: 'Select language'
        },
        spanish: {
          es: 'Español',
          en: 'Spanish'
        },
        english: {
          es: 'Ingles',
          en: 'English'
        },
        logout: {
          es: 'Salir',
          en: 'Log out'
        },
        header: {
          es: 'Configuraciones',
          en: 'Settings'
        }
      }
    }
  }

  logout = () => {
    this.cookies.remove('token', { path: '/' })
    localStorage.clear()
    this.setState({
      redirect: true
    })
  }

  updateUserData = (data) => {
    this.setState(data)
    const [key, value] = Object.entries(data).shift()
    console.log(key, value)
    localStorage.setItem(key, value)
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={this.state.text.header[this.state.iso]} />
        <section className="w-85 h-80 wrap pb-5px b-box">
          <div className="w-100 h-50">
            <p className="txt-gray fs-12px rubik-bold">{this.state.text.account[this.state.iso]}</p>
            <div className="w-100 h-90 overflow-auto">
              <Setting data={this.updateUserData} key="username" type="username" icon={<PersonIcon className="txt-gray" />} title={this.state.text.updateUsername[this.state.iso]} info={this.state.username} />
              <Setting data={this.updateUserData} key="email" type="email" icon={<EmailIcon className="txt-gray" />} title={this.state.text.updateEmail[this.state.iso]} info={this.state.email} />
              <Setting key="password" type="password" icon={<VpnKeyIcon className="txt-gray" />} title={this.state.text.updatePassword[this.state.iso]} info="********************" />
            </div>
          </div>
          <div className="w-100 h-50 pb-10px b-box">
            <p className="txt-gray fs-12px rubik-bold">{this.state.text.other[this.state.iso]}</p>
            <div className="w-100 h-90 overflow-auto">
              <Setting key="push-notifications" type="push-notifications" icon={<NotificationsIcon className="txt-gray" />} title={this.state.text.pushNotification[this.state.iso][0]} info={this.state.text.pushNotification[this.state.iso][1]} />
              <Setting data={this.updateUserData} key="language" type="language" icon={<LanguageIcon className="txt-gray" />} title={this.state.text.selectLanguage[this.state.iso]} info={this.state.text[this.state.language][this.state.iso]} />
            </div>
          </div>
        </section>
        <div className="w-100 h-10 row-end">
          <div className="w-100">
            <Button className="w-100 bg-gray-opacity fs-13px txt-center hover-btn" onClick={this.logout}><span className="rubik-bold">{this.state.text.logout[this.state.iso]}</span></Button>
          </div>
        </div>
      </main>
    );
  }
}

export default Settings;
