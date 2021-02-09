import React from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'

class ProtectedRoute extends React.Component {
  render() {
    const cookies = new Cookies(),
      Component = this.props.component,
      isAuthenticated = cookies.get('token')

    return !isAuthenticated ? (
      <Component />
    ) : (
        <Redirect to={{ pathname: '/Home' }} />
      )
  }
}

export default ProtectedRoute;