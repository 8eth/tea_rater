import React from 'react'
import Signup from "./Signup"
import Login from './Login'

function Auth({ setUser, setIsAuthenticated }) {
  return (
    <div>
      <h1 className="center">Tea Rater</h1>

      <Login 
        setUser={setUser} 
        setIsAuthenticated={setIsAuthenticated} 
      />

      <Signup 
        setUser={setUser} 
      />
    </div>
  )
}

export default Auth