import React, { Component } from 'react'
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz'
import { APIGetQuizzes } from '../../api/v1'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import '../.././index.css'

class Quizes extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: [],
      quizzesElements: []
    }
    this._ref = React.createRef();
  }

  componentDidMount = async () => {
    const response = await APIGetQuizzes()
    this.setState({
      quizzes: response.data.quizzes
    })
  }

  renderElements = () => {
    const elements = []
    for (const quiz of this.state.quizzes) {
      elements.push(
        <Quiz key={quiz._id} quizId={quiz._id} image="https://picsum.photos/200/300" title={quiz.title} description={quiz.description} coins={quiz.coins} />
      )
    }

    return elements
  }

  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Quizzes'} />
        <section className="w-100 h-90 wrap center-x">
          <div className="flex w-100 h-10 overflow-auto txt-gray-light fs-13px rubik-bold">
              <div>
                <p className="mx-10px selected">Forex</p>
              </div>
              <div>
                <p className="mx-10px">Stock</p>
              </div>
              <div>
                <p className="mx-10px">Cryptocurrencies</p>
              </div>
              <div>
                <p className="mx-10px">Strategies</p>
              </div>
              <div>
                <p className="mx-10px">Personality</p>
              </div>
              <div>
                <p className="mx-10px">Trivia</p>
              </div>
              <div>
                <p className="mx-10px">Finance</p>
              </div>
          </div>
          <div className="w-100 h-90 center-y">
            <div className="flex w-100 overflow-auto">
              {this.renderElements()}
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Quizes;
