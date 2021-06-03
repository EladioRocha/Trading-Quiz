import React from 'react'
import { Card, Button } from 'react-onsenui'
import { Link } from 'react-router-dom'

const Quiz = props => {
  console.log(props)
  return (
    <ons-col width="85%">
      <Card className="round-30px flex-100 mx-10px p-0 m-0 h-100 bg-gray-opacity">
        <div className="w-100 center-x">
          <img className="round-30px w-100" src={props.image} height="200"></img>
        </div>
        <div className="w-100 center-x mt-35px px-5px b-box">
          <h3 className="m-0 p-0 rubik-bold txt-white txt-center">{props.title.en}</h3>
        </div>
        <div className="w-100 center-x mt-5px">
          <p className="w-80 m-0 px-10px center-x txt-center txt-white fs-13px">{props.description.en}</p>
        </div>
        <div className="py-35px center-x">
          <div className="w-80">
            <Link to={`/QuizGame/${props.quizId}`}>
              <Button className="hover-btn round-30px fs-14px bg-blue-dark" modifier="large--cta"><p className="p-0 m-0 rubik-regular">{props.buttonText}</p></Button>
            </Link>
          </div>
        </div>
      </Card>
    </ons-col>
  )
}

export default Quiz;
