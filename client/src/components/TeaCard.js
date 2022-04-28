import React from 'react'
import { NavLink } from "react-router-dom";

function TeaCard({ tea }) {
  
  return (
    <div className='center aligned cards'>
      <div className='ui card'>

        <h4>{tea.name}</h4>
        <img src={tea.image} alt={tea.name}/>

        <div className='ui buttons'>
          <NavLink
            to={"/teas/" + tea.id}
            exact
            className="ui center floated button"                
            activeStyle={{
              background: "#E6E6E8",
            }}>
            <i class="coffee icon"></i>  
            Details
          </NavLink>

          <button className="ui button">
            <i class="shopping cart icon"></i>  
              <a href={tea.shop}>Shop</a>
          </button>
        </div>

        <ul>
          <li>{tea.reviews.taste}</li>
        </ul>
         
      </div>
      <br></br>
    </div>
  )
}

export default TeaCard