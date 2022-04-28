import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ setIsAuthenticated, setUser, user }) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
  }
  return ( 
    <div>

      <h1 className="center">Tea Rater</h1>
      <br></br>

      <NavLink
        to="/"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}>
        Home
      </NavLink> 

      <NavLink
        to="/teas"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}>
        Teas
      </NavLink> 

      <button className="ui center floated button" onClick={()=>logout()}>Logout</button>

    </div>
  )
}

export default NavBar