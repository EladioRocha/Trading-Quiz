import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class ToastAlert extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  showToast({success, message}) {
    console.log(success, message)
    if(success === 1) {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'txt-center'
      })
    } else {
      toast.warning(message, {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'txt-center'
      })
    }
  }
  
  render() {
    return (
      <ToastContainer limit={1}  />
    )
  }
}

export default ToastAlert
