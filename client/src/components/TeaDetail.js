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
            <div className="image">
              <img src={tea.image} alt={tea.name}/>
            </div>
          </div>

          <div className="detail-container">
            <div className="content">
              <div className="extra">

                Description
                <p className="divider"></p>
                <h5>{tea.description}</h5>
                <br/>

                Ingredients
                <p className="divider"></p>
                <h5>{tea.ingredients}</h5>
                <br/>

                Origin
                <p className="divider"></p>
                <h5>{tea.origin}</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default TeaDetail