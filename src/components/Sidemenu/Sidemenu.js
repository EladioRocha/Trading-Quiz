import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import HomeIcon from '@material-ui/icons/Home'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom'

class Sidemenu extends Component {
  constructor(props) {
    super(props)

    this.cookies = new Cookies()
    this.state = {
      redirect: false,
      text: {
        coins: {
          es: 'Monedas',
          en: 'Coins'
        },
        home: {
          es: 'Inicio',
          en: 'Home'
        },
        leaderboard: {
          es: 'Liderato',
          en: 'Leaderboard'
        },
        notifications: {
          es: 'Notificaciones',
          en: 'Notifications'
        },
        settings: {
          es: 'Configuraciones',
          en: 'Settings'
        },
        logout: {
          es: 'Salir',
          en: 'Log out'
        }
      }
    }
  }

  logout = () => {
    this.cookies = new Cookies()
    this.cookies.remove('token', { path: '/' })
    localStorage.clear()
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <Menu onClose={this.props.showMenu} burgerButtonClassName={this.props.isMenuOpen ? 'd-block' : 'd-none'} isOpen={this.props.isMenuOpen} className="bg-blue-dark z-index-master" width={"100%"}>
        <div className="w-100 h-100">
          <section className="h-30 p-35px b-box">
            <img className="round-50" src="https://picsum.photos/200/300" height="100px" width="100px"></img>
            <div className="mt-5px">
              <ons-row>
                <h3 className="rubik-regular txt-white m-0 p-0 py-5px">{localStorage.getItem('username')}</h3>
              </ons-row>
              <ons-row>
                <p className="rubik-regular txt-gray fs-15px m-0 p-0">{localStorage.getItem('coins')} {this.state.text.coins[this.cookies.get('iso')]}</p>
              </ons-row>
            </div>
          </section>

          <section className="h-60 p-35px b-box center-y">
            <div>
              <Link className="flex menu-overlay" to={"/Home"}>
                <div className="center-xy mr-10px">
                  <HomeIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">{this.state.text.home[this.cookies.get('iso')]}</div>
              </Link>
              <Link className="flex menu-overlay" to={"/Leaderboard"}>
                <div className="center-xy mr-10px">
                  <EmojiEventsIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">{this.state.text.leaderboard[this.cookies.get('iso')]}</div>
              </Link>
              <Link className="flex menu-overlay" to={"/Notifications"}>
                <div className="center-xy mr-10px">
                  <NotificationsIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">{this.state.text.notifications[this.cookies.get('iso')]}</div>
              </Link>
              {/* Earn coins por ahora no es necesario pero es probable que se cambie por otra cosa después. */}
              {/* <Link className="flex menu-overlay" to={"/EarnCoins"}>
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">Earn coins</div>
              </Link> */}
            </div>
          </section>

          <section className="h-10 row-end px-35px b-box">
            <div className="flex w-100 b-top py-10px">
              <Link className="flex w-50 menu-overlay py-10px b-right" to={"/Settings"}>
                <div className="center-y mr-10px">
                  <SettingsIcon className="txt-gray-light" />
                </div>
                <p className="center-y txt-gray-light">{this.state.text.settings[this.cookies.get('iso')]}</p>
              </Link>
              <div className="flex w-50 menu-overlay py-10px right hover-btn" onClick={this.logout}>
                <div className="center-y mr-10px">
                  <ExitToAppIcon className="txt-gray-light" />
                </div>
                <p className="center-y txt-gray-light rubik-regular">{this.state.text.logout[this.cookies.get('iso')]}</p>
              </div>
            </div>
            {/* <Button className="hover-btn fs-15px" modifier="large--cta">Iniciar sesión con facebook</Button> */}
          </section>
        </div>
      </Menu>
    );
  }
}

export default Sidemenu;
