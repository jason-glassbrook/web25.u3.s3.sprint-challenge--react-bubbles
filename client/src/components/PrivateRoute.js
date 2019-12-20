import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { user } from 'tools/auth'

const PrivateRoute = ({ component : Component, ...rest }) => {
  return (
    <Route {...rest} render={ (props) => {
      if (user.token.get () && user.isAllowed.get ()) {
        return (<Component {...props}/>)
      }
      else {
        return (<Redirect to={'/login'}/>)
      }
    }}/>
  )
}

export default PrivateRoute
