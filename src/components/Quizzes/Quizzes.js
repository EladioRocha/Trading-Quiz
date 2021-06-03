import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz'
import { APIGetQuizzes } from '../../api/v1'

class Quizes extends Component {
  constructor(props) {
    super(props)

    this.cookies = new Cookies()
    this.state = {
      quizzes: [],
      text: {
        header: {
          es: 'Cuestionarios',
          en: 'Quizzes'
        },
        buttonStart: {
          es: 'Empezar cuestionario',
          en: 'Start quiz'
        }
      }
    }
    this._ref = React.createRef();
  }

  componentDidMount = async () => {
    const response = await APIGetQuizzes(this.props.params.type)
    console.log(response)
    this.setState({
      quizzes: response.data.quizzes
    })
  }

  renderElements = () => {
    const elements = []
    for (const quiz of this.state.quizzes) {
      elements.push(
        <Quiz 
          key={quiz._id} 
          quizId={quiz._id} 
          image="https://picsum.photos/200/300" 
          title={quiz.title}
          description={quiz.description} 
          coins={quiz.coins} 
          buttonText={this.state.text.buttonStart[this.cookies.get('iso')]}
          />
      )
    }
    return elements
  }

  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="back" headerTitle={this.state.text.header[this.cookies.get('iso')]} />
        <section className="w-90 h-90 wrap center-x">
          <div className="w-100 h-100 py-20px b-box">
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
