import React from 'react'
import {useParams} from "react-router-dom"; 

function TeaDetail({ teas }) {

  let {id} = useParams()
  let tea = teas[parseInt(id)-1] 

  return (
    <div >
      <div className="ui items">
        <div className="item">
        
          <div>
            <div className="ui extra large image">
                <img src={tea.image} alt={tea.name}/>
            </div>
          </div>

          <div className="detail-container">
            <h2>{tea.name}</h2>
            <p className="divider"></p>
            <br/>
            <br/>
            <div className="content">

                <h3>Description</h3>
                {/* <p className="divider"></p> */}
                <h5>{tea.description}</h5>

                <h3>Ingredients</h3>
                {/* <p className="divider"></p> */}
                <h5>{tea.ingredients}</h5>

                <h3>Origin</h3>
                {/* <p className="divider"></p> */}
                <h5>{tea.origin}</h5>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default TeaDetail