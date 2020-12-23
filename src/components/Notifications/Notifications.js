import React, { Component } from "react"
import Header from "../Header/Header"
import Notification from "../Notification/Notification"

class Notifications extends Component {
  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Notifications'} />
        <div className="w-100 h-5">
          <ons-col width="100%">
            <p className="w-100 center-x txt-gray rubik-bold fs-13px">2 Unviewed</p>
          </ons-col>
        </div>
        <section className="w-85 h-75 wrap overflow-auto center-xy">
          <div className="w-100 h-95">
            <div className="w-100 h-90 overflow-auto">
              <Notification image="https://picsum.photos/200/300" title="New Quiz Available" date="Yesterday" unread={true} />
              <Notification image="https://picsum.photos/200/300" title="New Functionality" date="Yesterday" unread={true} />
              <Notification image="https://picsum.photos/200/300" title="New Quiz Available" date="Last Week" unread={false} />
              <Notification image="https://picsum.photos/200/300" title="New Badge Unlocked" date="Last Month" unread={false} />
            </div>
          </div>
        </section>
        <div className="h-10">
          <p className="p-0 m-0 txt-white hover-link">Clear All</p>
        </div>
      </main>
    )
  }
}

export default Notifications;
