import React, { Component } from 'react'
import Header from "../Header/Header"
import EarnCoin from "../EarnCoin/EarnCoin"

class EarnCoins extends Component {
  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Earn Coins'} />
        <div className="w-100 h-5">
          <ons-col width="100%">
            <p className="w-100 center-x txt-gray rubik-bold fs-13px">Tienes 2345.45 monedas</p>
          </ons-col>
        </div>
        <section className="w-85 h-80 wrap overflow-auto pb-5px b-box">
          <div className="w-100 h-100 flex wrap space-between">
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" /> 
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" /> 
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" /> 
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" /> 
            <EarnCoin image="https://picsum.photos/200/300" title="Watch Ad" coins="50" />
          </div>
        </section>
      </main>
    )
  }
}

export default EarnCoins;
