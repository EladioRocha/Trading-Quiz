import React, { Component } from "react"
import Cookies from 'universal-cookie'
import Header from '../Header/Header'
import Leader from '../Leader/Leader'
import { APIGetLeaderBoard } from '../../api/v1'

class Leaderboard extends Component {
  constructor() {
    super()
    this.cookies = new Cookies()
    this.state = {
      leaders: [],
      text: {
        header: {
          es: 'Liderato',
          en: 'Leaderboard'
        },
        coins: {
          es: 'Monedas',
          en: 'Coins'
        }
      }
    }
  }

  componentDidMount = async () => {
    const response = await APIGetLeaderBoard(),
      { leaders } = response.data

    this.setState({
      leaders
    })
  }

  renderLeaders = () => {
    try {
      return this.state.leaders.map((leader, idx) => <Leader image="https://picsum.photos/200/300" username={leader.username} coins={leader.coins} isLeader={idx === 0 ? true : false} textCoins={this.state.text.coins[this.cookies.get('iso')]} />)
    } catch (error) {
      console.error(`Ha ocurrido un error al renderizar el tablero de posiciones --> ${error.toString()}`)
    }
  }

  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={this.state.text.header[this.cookies.get('iso')]} />
        <section className="w-85 h-90 wrap overflow-auto">
          <div className="flex wrap">
            {this.renderLeaders()}
          </div>
        </section>
      </main>
    )
  }
}

export default Leaderboard;
