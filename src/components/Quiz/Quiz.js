import React from "react"
import { Card, Button } from "react-onsenui"
import { Link } from "react-router-dom"

const Quiz = props => {
  return (
    <ons-col width="85%">
      <Card className="flex-100 mx-10px p-0">
        <div className="w-100 center-x">
          <img className="w-100" src={props.image} height="200"></img>
        </div>
        <div className="w-100 center-x mt-35px">
          <h3 className="m-0 p-0 rubik-regular txt-gray-dark">{props.title}</h3>
        </div>
        <div className="w-100 center-x mt-5px">
          <p className="w-80 m-0 px-10px center-x txt-center txt-gray-dark fs-13px">{props.description}</p>
        </div>
        <div className="py-35px center-x">
          <div className="w-80">
            <Link to={"/QuizGame"}>
              <Button className="hover-btn round-30px fs-15px" modifier="large--cta">Empezar Quiz</Button>
            </Link>
          </div>
        </div>
      </Card>
    </ons-col>
  )
}

export default Quiz;
