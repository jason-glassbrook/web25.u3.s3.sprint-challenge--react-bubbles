import React, { Fragment } from 'react'

import { client, server } from 'routes'
import { authios, user } from 'tools/auth'

const init = {
  state : {
    creds : {
      username : '',
      password : '',
    },
    isFetching : false,
  }
}

const Login = (props) => {
  const [ state, setState ] = React.useState (init.state)

  const setCred = (name, value) => {
    setState ((state) => ({
      ...state,
      creds : {
        ...state.creds,
        [name] : value,
      },
    }))
  }

  const setIsFetching = (isFetching) => {
    setState ((state) => ({
      ...state,
      isFetching,
    }))
  }

  const handleCredChange = ({ target : { name, value } }) => {
    setCred (name, value)
  }

  const tryLogin = (e) => {
    e.preventDefault ()

    setIsFetching (true)

    authios ()
    .post (server.login.POST (), state.creds)
    .then ((response) => {

      console.log (response)

      setIsFetching (false)
      user.token.set (response.data.payload)
      user.isAllowed.set (true)

      props.history.push (client.bubbles ())

    })
    .catch ((error) => {

      console.log (error)

      setIsFetching (false)
      user.token.clear ()
      user.isAllowed.set (false)

    })
  }

  return (
    <div className='Login login-page'>

      <h1>Welcome to React Bubbles!</h1>

      <form
      className='login-form'
      onSubmit={tryLogin}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={state.creds.username}
          onChange={handleCredChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={state.creds.password}
          onChange={handleCredChange}
        />
        <button type='submit'>Log In</button>
      </form>

      {state.isFetching ? (
        <div>logging in</div>
      ) : (
        <Fragment/>
      )}

    </div>
  )
}

export default Login
