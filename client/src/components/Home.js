import React from 'react'
import NavBar from './NavBar'

function Home({ setIsAuthenticated, setUser, user }) {

  return (
    <div className="background"> 

      <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user}/>

    </div>
  )
}

export default Home 