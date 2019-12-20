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
import './styles.scss'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute
          exact path='/bubbles'
          component={BubblePage}
          />
          <Route
          exact path='/login'
          component={Login}
          />
          <Route
          exact path='/logout'
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
