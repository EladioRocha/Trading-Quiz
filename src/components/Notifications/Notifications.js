import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import Header from '../Header/Header'
import Notification from '../Notification/Notification'
import { APIGetUnviewedNotifications, APICleanViewedNotifications } from '../../api/v1'

class Notifications extends Component {
  constructor() {
    super()

    this.cookies = new Cookies()
    this.state = {
      notifications: [],
      text: {
        header: {
          es: 'Notificaciones',
          en: 'Notifications'
        },
        status: {
          es: 'Sin leer',
          en: 'Unviewed'
        }
      }
    }
  }

  componentDidMount = async () => {
    const response = await APIGetUnviewedNotifications()
    this.setState({
      notifications: response.data.notifications
    })
  }

  componentDidUpdate = () => {
    APICleanViewedNotifications()
  }

  renderNotifications = () => {
    try {
      return this.state.notifications.map(notification => <Notification image="https://picsum.photos/200/300" title={notification.title.en} date={notification.createdAt} unread={true}/>)
    } catch (error) {
      console.error(`Ha ocurrido un error al renderizar las notificaciones --> ${error.toString()}`)
    }
  }

  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={this.state.text.header[this.cookies.get('iso')]} />
        <div className="w-100 h-5">
          <ons-col width="100%">
            <p className="w-100 center-x txt-gray rubik-bold fs-13px">{this.state.notifications.length} {this.state.text.status[this.cookies.get('iso')]}</p>
          </ons-col>
        </div>
        <section className="w-85 h-75 wrap overflow-auto center-xy">
          <div className="w-100 h-95">
            <div className="w-100 h-90 overflow-auto">
              {this.renderNotifications()}
              {/* <Notification image="https://picsum.photos/200/300" title="New Functionality" date="Yesterday" unread={true} /> */}
            </div>
          </div>
        </section>
        <div className="h-10 w-100 center-x">
          {/* Por ahora esta comentado pero más adelante puede ser útil */}
          {/* <p className="p-0 m-0 txt-white hover-link">Clear All</p> */}
        </div>
      </main>
    )
  }
}

export default Notifications;
