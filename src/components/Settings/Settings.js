import React, { Component } from "react"
import Header from "../Header/Header"
import { Button } from "react-onsenui"
import EmailIcon from "@material-ui/icons/Email"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { Link } from "react-router-dom"
import Setting from "../Setting/Setting"

class Settings extends Component {
  render() {
    return (
      <main className="w-100 h-100 flex wrap center-x bg-blue-dark">
        <Header typeMenu="sidemenu" headerTitle={'Settings'} />
        <section className="w-85 h-80 wrap pb-5px b-box">
          <div className="w-100 h-50">
            <p className="txt-gray fs-12px rubik-bold">ACCOUNT</p>
            <div className="w-100 h-90 overflow-auto">
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
            </div>
          </div>
          <div className="w-100 h-50 pb-10px b-box">
            <p className="txt-gray fs-12px rubik-bold">OTHER</p>
            <div className="w-100 h-90 overflow-auto">
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
              <Setting icon={<EmailIcon className="txt-gray" />} title="Update an email" info="eladio.rocha99@gmail.com" />
            </div>
          </div>
        </section>
        <div className="w-100 h-10 row-end">
          <Link className="w-100">
            <Button className="w-100 bg-gray-opacity fs-13px">Log Out</Button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Settings;
