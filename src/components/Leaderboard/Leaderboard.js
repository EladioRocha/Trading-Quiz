import React, { Component } from "react"
import Header from "../Header/Header"
import Leader from "../Leader/Leader"

class Leaderboard extends Component {
  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Leaderboard'} />
        <section className="w-85 h-90 wrap overflow-auto">
          <div className="flex wrap">
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={true} />
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={false} />
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={false} />
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={false} />
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={false} />
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={false} />
            <Leader image="https://picsum.photos/200/300" username="Jhon Doe" coins="2048.34" isLeader={false} />
          </div>
        </section>
      </main>
    )
  }
}

export default Leaderboard;
