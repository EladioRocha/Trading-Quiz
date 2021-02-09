import React, { Component } from 'react'
import Cookies from 'universal-cookie'
import Header from '../Header/Header'
import Lesson from '../Lesson/Lesson'
import { APIGetLessons } from '../../api/v1'

class Education extends Component {
  constructor(props) {
    super(props)
    
    this.cookies = new Cookies()
    this.state = {
      lessons: [],
      text: {
        header: {
          es: 'Lecciones',
          en: 'Lessons'
        }
      }
    }
  }

  componentDidMount = async () => {
    const response = await APIGetLessons(this.props.params.type)
    this.setState({
      lessons: response.data.lessons
    })
  }

  renderElements = () => {
    const elements = []
    for (const lesson of this.state.lessons) {
      console.log(lesson.statusRead)
      elements.push(
        <Lesson 
          key={lesson._id} 
          index={lesson.order} 
          lessonId={lesson._id} 
          title={lesson.title} 
          description={lesson.description} 
          coins={lesson.coins} 
          readingTime={lesson.readingTime}
          statusRead={lesson.statusRead}
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
          <div className="w-100 h-100 overflow-auto py-20px b-box">
            <div className="flex wrap w-100 overflow-auto">
              {this.renderElements()}
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Education;
