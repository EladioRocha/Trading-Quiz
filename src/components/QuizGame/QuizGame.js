import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Toolbar } from "react-onsenui"
import Header from "../Header/Header"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import MonetizationOnSharpIcon from "@material-ui/icons/MonetizationOnSharp"

class QuizGame extends Component {
  renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      // return <div className="timer w-100 h-100 center-y">0</div>;
    }

    return (
      <div className="timer w-100 h-100 center-xy">
        <div className="txt-white rubik-bold bg-dark-1 w-100 h-100 center-xy z-index-negative round-50">{this.addLeftZero(parseInt(remainingTime))}</div>
      </div>
    );
  };

  addLeftZero = time => {
    return time < 10 ? `0${time}` : time
  }

  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="back" headerTitle="Forex" />
        <section className="w-100 h-90 wrap center-x">
          <div className="w-100 h-5">
            <ons-col width="100%">
              <p className="w-100 center-x txt-gray rubik-bold fs-13px">Question 1/10</p>
            </ons-col>
          </div>
          <div className="w-100 h-85 center-x">
            <div className="w-85 mt-10px">
              <ons-col width={"100%"}>
                <h3 className="txt-white txt-center">In a bull market, a ____ level is an area that price has difficulty breaking through to the downside.</h3>
              </ons-col>
              <div>
                <div>
                  <Button className="bg-none border-1px hover-btn round-10px mt-10px" modifier="large--cta">Support</Button>
                  <Button className="bg-none border-1px hover-btn round-10px mt-10px" modifier="large--cta">Retracement</Button>
                  <Button className="bg-none border-1px hover-btn round-10px mt-10px" modifier="large--cta">Resistance</Button>
                  <Button className="bg-none border-1px hover-btn round-10px mt-10px" modifier="large--cta">Pull up</Button>
                  <Link to={"/QuizResult"}>
                    Result
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 h-10 position-relative flex row-end">
            <div className="flex row-end">
              <Toolbar className="no-position no-border">
                <div className="left center-xy">
                  <MonetizationOnSharpIcon className="txt-gray-light" />
                </div>
                <div className="center">
                  <div className="center-x">
                    <div className="position-absolute b-20px">
                      <CountdownCircleTimer
                        size={75}
                        strokeWidth={10}
                        isPlaying
                        duration={10}
                        colors={[["#64ca31"]]}
                        onComplete={() => [true, 1000]}
                      >
                        {this.renderTime}
                      </CountdownCircleTimer>
                    </div>
                  </div>
                </div>
                <div className="right center-xy">
                  <MonetizationOnSharpIcon className="txt-red-light" />
                </div>
              </Toolbar>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default QuizGame;
