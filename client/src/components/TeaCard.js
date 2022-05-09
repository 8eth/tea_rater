import React from 'react'
import { NavLink } from "react-router-dom";

function TeaCard({ tea }) {

  const handleClickTeaShop = () => {
    window.open(tea.shop);
  }
  
  return (
    <div className='center aligned cards'>
      <div className='ui card'>

        <h4>{tea.name}</h4>
        <img src={tea.image} alt={tea.name}/>

        <div className='ui buttons'>
          <NavLink
            to={"/teas" + tea.id}
            exact
            className="ui center floated button"                
            activeStyle={{
              background: "#E6E6E8",
            }}>
            <i className="coffee icon"></i>  
            Details
          </NavLink>

          <button className="ui button" onClick={handleClickTeaShop}>
            <i className="shopping cart icon"></i>  
            Shop
          </button>
        </div>
         
      </div>
      <br></br>
    </div>
  )
}

export default TeaCard