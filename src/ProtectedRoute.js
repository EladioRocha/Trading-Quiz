import React from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cookies = new Cookies(),
      isAuthenticated = cookies.get('token'),
      Component = this.props.component,
      computedMatch = this.props.computedMatch.params

    return isAuthenticated ? (
      <Component params={computedMatch} />
    ) : (
        <Redirect to={{ pathname: '/' }} />
      );
  }
}

export default ProtectedRoute;