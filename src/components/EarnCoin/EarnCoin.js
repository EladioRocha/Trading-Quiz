import React from "react"

const EarnCoin = props => {
  return (
    <div className="w-48 h-30 bg-gray-opacity center-xy wrap mb-10px">
      <div className="w-100 center-x pt-15px b-box">
        <img src={props.image} height="65px" width="65px"></img>
      </div>
      <div className="pb-5px b-box">
        <p className="txt-white fs-14px w-100 p-0 m-0 txt-center">{props.title}</p>
        <p className="txt-gray fs-12px w-100 p-0 m-0 txt-center">+{props.coins} Coins</p>
      </div>
    </div>
  )
}

export default EarnCoin;
