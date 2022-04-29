import React from 'react'
import {useParams} from "react-router-dom"; 
import TeaReviewList from "./TeaReviewList"

function TeaDetail({ teas }) {
  let {id} = useParams()
  let tea = teas[parseInt(id)-1] //    replace with find by id

  if (tea === undefined) {
    return (<div>loading</div>)
  }

  console.log(id)
  console.log(teas)

  return (
    <div >
      <div className="ui items">
        <div className="item">
        
          <div>
            <div className="ui extra large image">
              <img src={tea.image} alt={tea.name}/>
            </div>
            <button className="ui button">
              <i className="shopping large cart icon"></i>  
              <a className="a" href={tea.shop}> BUY IT FROM THE RETAILER </a>
            </button>
          </div>

          <div className="detail-container">
           
            <h2>{tea.name}</h2>
            <p className="divider"></p>
            <br/>
          
            <div className="content">
              <div className="ui placeholder segment"> 
                <div className="ui one column small grid">
                  <div className="column">
                    <h3>Description</h3>
                    <h5>{tea.description}</h5>

                    <h3>Ingredients</h3>
                    <h5>{tea.ingredients}</h5>

                    <h3>Origin</h3>
                    <h5>{tea.origin}</h5>
                  </div>
                 
                </div>
              </div>
              <p className="divider"></p>
              <h3>Reviews</h3>

              {tea.reviews.map((review) => {
                return (
                  <div className="ui segment">
                    <TeaReviewList
                      key = {review.id}
                      review = {review}
                    />
                  </div>
                )
              })}

            </div>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default TeaDetail