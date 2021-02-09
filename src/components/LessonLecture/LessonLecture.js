import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import parse from 'html-react-parser'
import Header from '../Header/Header'
import { Button } from 'react-onsenui'
import { Redirect } from 'react-router-dom'

import { APIGetLesson, APIMarkAsReadLesson } from '../../api/v1'
import ToastAlert from '../ToastAlert/ToastAlert'


class LessonLecture extends Component {
  constructor(props) {
    super(props)

    this.cookies = new Cookies()
    this.state = {
      lessonId: '',
      title: '',
      content: '',
      type: '',
      nextLessonId: '',
      isLoading: true,
      redirect: false,
      text: {
        header: {
          es: 'Lecciones',
          en: 'Lessons'
        },
        contentLoad: {
          es: 'El contenido esta cargando...',
          en: 'Content is loading...'
        },
        buttonNext: {
          es: 'Ir a la siguiente lección',
          en: 'Go to next lesson'
        }
      }
    }
  }

  componentDidMount = async () => {
    const response = await APIGetLesson(this.props.params.lessonId)
    this.setState({
      lessonId: response.data.lesson._id,
      title: response.data.lesson.title,
      content: parse(response.data.lesson.content),
      type: response.data.lesson.type,
      nextLessonId: response.data.nextLessonId,
      isLoading: false,
    })
  }

  componentDidUpdate = async prevProps => {
    if (prevProps.params.lessonId !== this.props.params.lessonId) {
      const response = await APIGetLesson(this.props.params.lessonId)
      this.setState({
        lessonId: response.data.lesson._id,
        title: response.data.lesson.title,
        content: parse(response.data.lesson.content),
        type: response.data.lesson.type,
        nextLessonId: response.data.nextLessonId,
        isLoading: false,
      })
    }
  }

  handleMarkAsReadLesson = async () => {
    const response = await APIMarkAsReadLesson({ lessonId: this.state.lessonId })
    this.child.showToast(response)
    setTimeout(() => {
      this.setState({
        redirect: true
      })
    }, 3000)
  }

  render() {
    if (this.state.redirect && this.state.nextLessonId) {
      this.setState({
        redirect: false
      })
      return <Redirect to={`/LessonLecture/${this.state.nextLessonId}`} />
    }

    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="back" headerTitle={this.state.text.header[this.cookies.get('iso')]} path={`/Lessons/${this.state.type}`} />
        <section className="w-90 h-90 wrap center-x">
          <div className="w-100 h-100 overflow-auto py-20px b-box">
            <h1 className="txt-white rubik-bold">{this.state.title}</h1>
            <div className="txt-white">
              {this.state.content}
            </div>
            {
              this.state.isLoading ?
                (<p className="txt-white center-xy">{this.state.text.contentLoad[this.cookies.get('iso')]}</p>)
                :
                (<div className="py-20px b-box">
                  <Button className="hover-btn my-15px b-box round-30px fs-15px bg-success" modifier="large--cta" onClick={this.handleMarkAsReadLesson}>{this.state.text.buttonNext[this.cookies.get('iso')]}.</Button>
                </div>)
            }
            <ToastAlert onRef={ref => (this.child = ref)} />
          </div>
        </section>
      </main>
    )
  }
}

export default LessonLecture;
