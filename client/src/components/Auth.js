import React from 'react'
import Signup from "./Signup"
import Login from './Login'

function Auth({ setUser, setIsAuthenticated }) {
  return (
    <div>

      <div className="logo-center">
        <i className="small coffee icon left floated"></i> TEA RATER 
      </div>

      <div className="ui placeholder segment">

        <div className="ui two column small grid">
          <div className="ui fluid column">
            <Login 
              setUser={setUser} 
              setIsAuthenticated={setIsAuthenticated} 
            />
          </div>

          <div className="ui fluid column">
            <Signup 
              setUser={setUser} 
            />
          </div>
        </div>
        <div class="ui vertical divider"></div>
      </div>

      <div className="footer">
      <div>Furbaby Sitters Club   | //Flatiron School</div>   
        <div>Created By: Beth Fekadu| GitHub: <a href="https://github.com/8eth">Beth</a></div>
      </div>

    </div>
  )
}

export default Auth