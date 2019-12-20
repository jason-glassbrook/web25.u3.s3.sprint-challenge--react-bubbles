import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { client } from 'routes'
import user from 'tools/user'

const PrivateRoute = ({ component : Component, ...rest }) => {
  return (
    <Route {...rest} render={ (props) => {
      if (user.token.get () && user.isAllowed.get ()) {
        return (<Component {...props}/>)
      }
      else {
        return (<Redirect to={client.ends.login ()}/>)
      }
    }}/>
  )
}

export default PrivateRoute
