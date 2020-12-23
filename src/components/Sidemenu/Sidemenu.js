import React, { Component } from "react"
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"
import MonetizationOnSharpIcon from "@material-ui/icons/MonetizationOnSharp"

class Sidemenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
              <div className="flex menu-overlay">
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <Link className="center-xy py-15px rubik-regular txt-white" to={"/Quizes"}>Quizes</Link>
              </div>
              <div className="flex menu-overlay">
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <Link className="center-xy py-15px rubik-regular txt-white" to={"/Leaderboard"}>Leadboard</Link>
              </div>
              <div className="flex menu-overlay py-10px">
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <Link className="center-xy py-15px rubik-regular txt-white" to={"/Notifications"}>Notifications</Link>
              </div>
              <div className="flex menu-overlay">
                <div className="center-xy mr-10px">
                  <MonetizationOnSharpIcon className="txt-white" />
                </div>
                <Link className="center-xy py-15px rubik-regular txt-white" to={"/EarnCoins"}>Earn coins</Link>
              </div>
            </div>
          </section>

          <section className="h-10 row-end px-35px b-box">
            <div className="flex w-100 b-top py-10px">
              <div className="flex w-50 menu-overlay py-10px b-right">
                <div className="center-y mr-10px">
                  <MonetizationOnSharpIcon className="txt-gray-light" />
                </div>
                <Link className="center-y txt-gray-light" to={"/Settings"}>Settings</Link>
              </div>
              <div className="flex w-50 menu-overlay py-10px right">
                <div className="center-y mr-10px">
                  <MonetizationOnSharpIcon className="txt-gray-light" />
                </div>
                <Link className="center-y txt-gray-light rubik-regular" to={"/"} >Log Out</Link>
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
