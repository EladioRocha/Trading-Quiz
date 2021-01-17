import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp'
import { Toolbar } from 'react-onsenui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Sidemenu from '../Sidemenu/Sidemenu'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeMenu: this.props.typeMenu,
      headerTitle: this.props.headerTitle,
      isMenuOpen: false
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      headerTitle: nextProps.headerTitle
    })
  }

  showMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  getMenuByTypeMenuState = () => {
    const { typeMenu } = this.state
    if (!typeMenu || typeMenu === 'sidemenu') {
      return (
        <Toolbar>
          <Sidemenu isMenuOpen={this.state.isMenuOpen} showMenu={this.showMenu} />
          <div className="left center-xy">
            <MenuIcon className="hover-btn txt-white" onClick={this.showMenu} />
          </div>
          <div className="center center-x">
            <p className="center-xy center-x m-0 p-0 txt-white rubik-bold">{this.state.headerTitle}</p>
          </div>
          <div className="right center-xy">
            <MonetizationOnSharpIcon className="txt-white" />
          </div>
        </Toolbar>
      )
    } else if (typeMenu === 'back') {
      return (
        <Toolbar>
          <div className="left center-xy">
            <Link to={"/Quizzes"}>
              <ArrowBackIcon className="txt-white center-xy"/>
            </Link>
          </div>
          <div className="center center-x">
            <p className="center-xy center-x m-0 p-0 txt-white rubik-bold">{this.state.headerTitle}</p>
          </div>
          <div className="right center-xy">
            <MoreHorizIcon className="txt-white"  />
          </div>
        </Toolbar>
      )
    }
  }

  render() {
    return (
      <header className="w-100 h-10">
        <ons-row>
          {this.getMenuByTypeMenuState()}
        </ons-row>
      </header>
    )
  }
}

export default Header
