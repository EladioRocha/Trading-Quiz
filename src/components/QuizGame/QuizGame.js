import React, { Component } from 'react'
import { Button, Toolbar } from 'react-onsenui'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp'
import { Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import { APIGetQuestionsQuiz, APIResultQuiz } from '../../api/v1'

class QuizGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      questions: [],
      quizId: '',
      selectedAnswerUser: [],
      currentQuestionId: '',
      currentAnswers: [],
      isPlayingTimer: true,
      savedResult: false,
      redirect: false,
      totalQuestions: 0 
    }
  }

  componentDidMount = async () => {
    const response = await APIGetQuestionsQuiz(this.props.params.quizId),
      { _id, title, questions } = response.data.quiz[0],
      questionIdx = this.getRandomInt(0, (questions.length - 1))

    this.setState({
      title,
      questions,
      quizId: _id,
      currentQuestionId: questions[questionIdx]._id,
      currentQuestion: questions[questionIdx].question.en,
      currentAnswers: questions[questionIdx].answers.sort(() => 0.5 - Math.random()),
      totalQuestions: questions.length
    })
  }

  getRandomInt = (min = 0, max = (this.state.questions.length - 1)) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  renderTime = ({ remainingTime }) => {
    return (
      <div className="timer w-100 h-100 center-xy">
        <div className="txt-white rubik-bold bg-dark-1 w-100 h-100 center-xy z-index-negative round-50">{this.addLeftZero(parseInt(remainingTime))}</div>
      </div>
    );
  };

  addLeftZero = time => {
    return time < 10 ? `0${time}` : time
  }

  setStateQuestions = async () => {
    if (this.state.questions.length <= 1) {
      this.setState({
        isPlayingTimer: false
      })
      await this.saveResult()
      return
    }
    let questions = [...this.state.questions]
    questions = questions.filter(question => question._id.toString() !== this.state.currentQuestionId.toString())

    const questionIdx = this.getRandomInt(0, (questions.length - 1))
    this.setState({
      questions,
      currentQuestionId: questions[questionIdx]._id,
      currentQuestion: questions[questionIdx].question.en,
      currentAnswers: questions[questionIdx].answers.sort(() => 0.5 - Math.random()),
      currentQuestionCounter: this.state.currentQuestionCounter++
    })
  }

  handleSelectedAnswer = async answerId => {
    await this.setStateQuestions()

    const answers = [...this.state.selectedAnswerUser]
    answers.push({ questionId: this.state.currentQuestionId, answerId })
    this.setState({
      selectedAnswerUser: answers
    })
  }

  handleOnCompleteTimer = () => {
    this.setStateQuestions()
    return [true, 500]
  }

  saveResult = async () => {
    if (this.state.savedResult) return

    const result = {
      quizId: this.state.quizId,
      answers: this.state.selectedAnswerUser
    },
      response = await APIResultQuiz(result)

    if (response.success === 1) {
      this.setState({
        savedResult: true,
        responseMessage: response.message,
        redirect: true
      })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/QuizResult/${this.state.responseMessage}`} />
    }

    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="back" headerTitle={this.state.title} />
        <section className="w-100 h-90 wrap center-x">
          <div className="w-100 h-5">
            <ons-col width="100%">
              <p className="w-100 center-x txt-gray rubik-bold fs-13px">Question {this.state.totalQuestions - this.state.questions.length + 1}/{this.state.totalQuestions}</p>
            </ons-col>
          </div>
          <div className="w-100 h-85 center-x">
            <div className="w-85 mt-10px">
              <ons-col width={"100%"}>
                <h3 className="txt-white txt-center txt-normalize fs-15px rubik-bold">{this.state.currentQuestion}</h3>
              </ons-col>
              <div>
                <div>
                  {
                    this.state.currentAnswers.map(({ _id, answer }) => (
                      <Button key={_id} className="no-white-space center-xy line-h-20px bg-none border-1px hover-btn round-10px mt-10px" modifier="large--cta" onClick={() => this.handleSelectedAnswer(_id)}>
                        <p className="fs-14px rubik-light txt-wrap txt-normalize m-0 p-0">{answer.en}</p>
                      </Button>
                    ))
                  }
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
                    <div className="p-absolute b-20px">
                      <CountdownCircleTimer
                        key={this.state.currentQuestionId}
                        size={75}
                        strokeWidth={10}
                        isPlaying={!this.state.isPlayingTimer}
                        duration={10}
                        colors={[["#64ca31"]]}
                        onComplete={this.handleOnCompleteTimer}
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
