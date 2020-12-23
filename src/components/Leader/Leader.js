import React from "react"

const Leader = props => {
  return (
    <div className={`${props.isLeader ? "w-100 txt-center" : "py-15px w-50 txt-center"}`}>
      <img className="round-50" src={props.image} height="100px" width="100px"></img>
      <h3 className="w-100 p-0 m-0 txt-white rubik-bold">{props.username}</h3>
      <p className="w-100 p-0 m-0 txt-gray-light">Coins: {props.coins}</p>
    </div>
  )
}

export default Leader;
