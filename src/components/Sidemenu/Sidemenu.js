import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom'

class Sidemenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  logout = () => {
    const cookies = new Cookies()
    cookies.remove('token', { path: '/' })
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
                <h3 className="rubik-regular txt-white m-0 p-0 py-5px">Eladio Rocha</h3>
              </ons-row>
              <ons-row>
                <p className="rubik-regular txt-gray fs-15px m-0 p-0">2259 coins</p>
              </ons-row>
            </div>
          </section>

          <section className="h-60 p-35px b-box center-y">
            <div>
              <Link className="flex menu-overlay" to={"/Quizzes"}>
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">Quizzes</div>
              </Link>
              <Link className="flex menu-overlay" to={"/Leaderboard"}>
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">Leadboard</div>
              </Link>
              <Link className="flex menu-overlay py-10px" to={"/Notifications"}>
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">Notifications</div>
              </Link>
              <Link className="flex menu-overlay" to={"/EarnCoins"}>
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <div className="center-xy py-15px rubik-regular txt-white">Earn coins</div>
              </Link>
            </div>
          </section>

          <section className="h-10 row-end px-35px b-box">
            <div className="flex w-100 b-top py-10px">
              <Link className="flex w-50 menu-overlay py-10px b-right" to={"/Settings"}>
                <div className="center-y mr-10px">
                  <MonetizationOnSharpIcon className="txt-gray-light" />
                </div>
                <p className="center-y txt-gray-light" >Settings</p>
              </Link>
              <div className="flex w-50 menu-overlay py-10px right hover-btn" onClick={this.logout}>
                <div className="center-y mr-10px">
                  <MonetizationOnSharpIcon className="txt-gray-light" />
                </div>
                <p className="center-y txt-gray-light rubik-regular">Log Out</p>
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
