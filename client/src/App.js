import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import Login from 'components/Login'
import Logout from 'components/Logout'
import BubblePage from 'components/BubblePage'

import { client } from 'routes'

import './styles.scss'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute
          exact path={client.bubbles ()}
          component={BubblePage}
          />
          <Route
          exact path={client.login ()}
          component={Login}
          />
          <Route
          exact path={client.logout ()}
          component={Logout}
          />
          <Route
          component={Login}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
