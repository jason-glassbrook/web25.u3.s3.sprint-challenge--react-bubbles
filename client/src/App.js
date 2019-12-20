import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './components/Login'
import './styles.scss'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/*
            Build a PrivateRoute component that will
            display BubblePage when you're authenticated
          */}
          {/* <Route exact path='/logout'
          component={Logout}
          /> */}
          <Route exact path='/login'
          component={Login}
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
