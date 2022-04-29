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

      <br></br>
      <div>
        <i className="large coffee icon left floated"></i>  
        <h1 className="center">TEA RATER</h1>
      </div>
      <br></br>

      <NavLink
        to="/"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}>
        HOME
      </NavLink> 

      <NavLink
        to="/teas"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}>
        ALL TEAS
      </NavLink> 

      <button className="ui center floated button" onClick={()=>logout()}>LOG OUT</button>

    </div>
  )
}

export default NavBar