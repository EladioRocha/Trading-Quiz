import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

const Notification = props => {
  return (
    <div className={`mb-10px w-100 h-20 flex px-10px b-box round-rl-10px ${props.unread ? "bg-gray-opacity-light border-l-3px" : "bg-gray-opacity"}` }>
      <div className="h-100 center-xy">
        <div className="txt-gray w-100 h-auto center-xy px-10px b-box">
          <img className="round-50" src={props.image} height="45px" width="45px"></img>
        </div>
      </div>
      <div className="center-y h-100">
        <div className="w-100 h-auto px-10px b-box">
          <p className="p-0 m-0 txt-white rubik-bold fs-14px">{props.title}</p>
          <p className="p-0 m-0 txt-gray fs-13px">
            <Moment fromNow ago>{props.date}</Moment>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notification;