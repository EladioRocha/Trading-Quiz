import React from "react"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

const Setting = props => {
  return (
    <div className="mb-10px w-100 h-33 flex bg-gray-opacity px-10px b-box round-10px">
      <div className="h-100 center-xy">
        <div className="txt-gray w-100 h-auto border-1px round-50 center-xy p-8px bg-none">
          {props.icon}
        </div>
      </div>
      <div className="center-y h-100">
        <div className="w-100 h-auto px-10px b-box">
          <p className="p-0 m-0 txt-white rubik-bold fs-14px">{props.title}</p>
          <p className="p-0 m-0 txt-gray fs-13px">{props.info}</p>
        </div>
      </div>
      <div className="center-xy w-33 h-100">
        <div className="w-100 h-auto right">
          <ArrowForwardIosIcon className="txt-gray" />
        </div>
      </div>
    </div>
  )
}

export default Setting;
