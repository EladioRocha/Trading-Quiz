import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { animations } from 'react-animation'
import Cookies from 'universal-cookie'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import '../.././index.css'

class Quizes extends Component {
  constructor() {
    super()

    this.cookies = new Cookies()
    this.state = {
      quizzes: [],
      quizzesElements: [],
      sections: [
        'Forex',
        'Stock',
        'Cryptocurrency'
        // 'Strategies',
        // 'Personality',
        // 'Trivia',
        // 'Finance'
      ],
      currentSection: 'Forex',
      animation: animations.fadeIn,
      text: {
        lessons: {
          es: 'Lecciones',
          en: 'Lessons'
        },
        quizzes: {
          es: 'Cuestionarios',
          en: 'Quizzes'
        },
        forex: {
          es: 'Divisas',
          en: 'Forex',
        },
        stock: {
          es: 'Acciones',
          en: 'Stock'
        },
        cryptocurrency: {
          es: 'Criptomonedas',
          en: 'Cryptocurrency'
        },
        header: {
          es: 'Inicio',
          en: 'Home'
        }
      }
    }
  }

  renderSectionsNavbar = () => {
    const elements = []
    for (const section of this.state.sections) {
      elements.push(
        <div className="hover-btn">
          <p className={`mr-15px ${section === this.state.currentSection ? 'selected' : ''}`} onClick={() => this.handleClickCurrentSection(section)}>{ this.state.text[section.toLowerCase()][this.cookies.get('iso')] }</p>
        </div>
      )
    }

    return elements
  }

  handleClickCurrentSection = currentSection => {
    this.setState({
      currentSection,
      animation: animations.fadeOut
    })

    setTimeout(() => this.setState({animation: animations.fadeIn}), 500)
  }

  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={this.state.text.header[this.cookies.get('iso')]} />
        <section className="w-90 h-90 wrap center-x">
          <div className="flex w-100 h-10 overflow-auto txt-gray-light fs-13px rubik-bold">
            {this.renderSectionsNavbar()}
          </div>
          <div className="w-100 h-90 overflow-auto">
            <div className="flex wrap w-100 overflow-auto">
              <Link 
                className="flex bg-gray-opacity round-30px mb-10px w-100 bg-white p-15px" 
                to={`/Lessons/${this.state.currentSection}`}
                style={{animation: this.state.animation}}
                >
                <div className="w-auto">
                  <img className="round-50" src="https://picsum.photos/200/300" width="60" height="60"></img>
                </div>
                <div className="w-90 center-y center-x">
                  <h3 className="m-0 p-0 mx-15px rubik-bold txt-white">{this.state.text.lessons[this.cookies.get('iso')]}</h3>
                </div>
              </Link>
              <Link
                className="flex bg-gray-opacity round-30px mb-10px w-100 bg-white p-15px" 
                to={`/Quizzes/${this.state.currentSection}`} 
                style={{animation: this.state.animation}}
              >
                <div className="w-auto">
                  <img className="round-50" src="https://picsum.photos/200/300" width="60" height="60"></img>
                </div>
                <div className="w-90 center-y center-x">
                  <h3 className="m-0 p-0 mx-15px rubik-bold txt-white">{this.state.text.quizzes[this.cookies.get('iso')]}</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Quizes;
