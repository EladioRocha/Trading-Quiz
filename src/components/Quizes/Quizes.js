import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "react-onsenui"
import Header from "../Header/Header"
import Quiz from '../Quiz/Quiz'

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "../.././index.css"

class Quizes extends Component {
  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Quizes'} />
        <section className="w-100 h-90 wrap center-x">
          <ons-row>
            <div className="w-100 h-5">
              <ons-col width="100%">
                <p className="w-100 center-x txt-gray rubik-bold fs-14px">¿Qué deseas aprender?</p>
              </ons-col>
            </div>
            <div className="w-100 h-95 center-y">
              <div className="flex w-100 overflow-auto">
                <Quiz image="https://picsum.photos/200/300" title="Forex" description="lorem ipsum dolot asim emet adam smith" />
                <Quiz image="https://picsum.photos/200/300" title="BMV" description="lorem ipsum dolot asim emet adam smith" />
                <Quiz image="https://picsum.photos/200/300" title="Econometria" description="lorem ipsum dolot asim emet adam smith" />
              </div>
            </div>
          </ons-row>
        </section>
      </main>
    )
  }
}

export default Quizes;
