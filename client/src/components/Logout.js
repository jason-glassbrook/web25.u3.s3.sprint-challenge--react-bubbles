import React from 'react'

// import authios from 'tools/authios'
import { client } from 'routes'
import { user } from 'tools/auth'

const Logout = (props) => {
  const tryLogout = (e) => {
    e.preventDefault ()
    user.clear ()

    props.history.push (client.root ())
  }

  return (
    <div className='Logout logout-page'>

      <h1>Goodbye from React Bubbles!</h1>

      <form
      className='logout-form'
      onSubmit={tryLogout}>
        <button type='submit'>Log Out</button>
      </form>

    </div>
  )
}

export default Logout
