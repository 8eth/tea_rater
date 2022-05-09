import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ setIsAuthenticated, setUser }) {

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
    <div className="ui placeholder segment logo">

      <div className="ui three column small grid ">

        <div className="logo">
          <i className="small coffee icon left floated"></i> TEA RATER
        </div>

        <div className="left column">
          
        </div>

        <div className="navBar">

          {/* <NavLink
            to="/"
            exact
            className="ui center floated button"
            activeStyle={{
              background: "#E6E6E8",
            }}>
            HOME
          </NavLink>  */}

          <NavLink
            to="/"
            exact
            className="ui center floated button"
            activeStyle={{
              background: "#E6E6E8",
            }}>
            ALL TEAS
          </NavLink> 

          <NavLink
            to="/profile"
            exact
            className="ui center floated button"
            activeStyle={{
              background: "#E6E6E8",
            }}>
            PROFILE
          </NavLink> 

          <NavLink
            to="/"
            exact
            className="ui center floated button"
            onClick={()=>logout()}
            activeStyle={{
              background: "#E6E6E8",
            }}>
            LOG OUT
          </NavLink> 

        </div>

      </div>
    </div>
  )
}

export default NavBar