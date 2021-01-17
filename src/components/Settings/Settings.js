import React, { Component } from 'react'
import Header from '../Header/Header'
import { Button } from 'react-onsenui'
import EmailIcon from '@material-ui/icons/Email'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import NotificationsIcon from '@material-ui/icons/Notifications'

import Setting from '../Setting/Setting'

class Settings extends Component {
  constructor() {
    super()
    this.state = {
      redirect: true
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
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Settings'} />
        <section className="w-85 h-80 wrap pb-5px b-box">
          <div className="w-100 h-50">
            <p className="txt-gray fs-12px rubik-bold">ACCOUNT</p>
            <div className="w-100 h-90 overflow-auto">
              <Setting key="username" type="username" icon={<PersonIcon className="txt-gray" />} title="Update username" info="eladiorocha" />
              <Setting key="email" type="email" icon={<EmailIcon className="txt-gray" />} title="Update email" info="eladio.rocha99@gmail.com" />
              <Setting key="password" type="password" icon={<VpnKeyIcon className="txt-gray" />} title="Update password" info="********************" />
            </div>
          </div>
          <div className="w-100 h-50 pb-10px b-box">
            <p className="txt-gray fs-12px rubik-bold">OTHER</p>
            <div className="w-100 h-90 overflow-auto">
              <Setting key="push-notifications" type="push-notifications" icon={<NotificationsIcon className="txt-gray" />} title="Push notification" info="For new features, gifts and more." />
            </div>
          </div>
        </section>
        <div className="w-100 h-10 row-end">
          <div className="w-100">
            <Button className="w-100 bg-gray-opacity fs-13px txt-center hover-btn" onClick={this.logout}><span className="rubik-bold">Log Out</span></Button>
          </div>
        </div>
      </main>
    );
  }
}

export default Settings;
