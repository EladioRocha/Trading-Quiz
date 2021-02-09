import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const Lesson = props => {
  return (
    <Link to={`/LessonLecture/${props.lessonId}`} className="flex bg-gray-opacity round-30px mb-10px w-100 bg-white p-15px">
      <div className="w-5">
        <h4 className="b-box txt-white">{props.index}</h4>
      </div>
      <div className="w-85 center-y center-x wrap w-100 txt-center center-y hover-btn">
        <h3 className="m-0 p-0 mx-15px rubik-bold fs-14px txt-white w-100">{props.title}</h3>
        <p className="rubik-light txt-gray-light fs-12px p-0 m-0">Lecture time: {props.readingTime}</p>
      </div>
      <div className="w-10 center-xy">
        <p className="fs-12px txt-white rubik-bold">{
        !(props.statusRead) ? `+ ${props.coins}` : <CheckCircleIcon className="txt-success" />
        }</p>
      </div>
    </Link>
  )
}

export default Lesson;
