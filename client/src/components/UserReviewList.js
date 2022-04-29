import React from 'react'
import { Rating } from 'semantic-ui-react' 

function UserReviewList({ review }) {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column small grid">

        <div className="column">
          <i className="coffee icon"></i>  
          <h4>{review.tea.name}</h4>
          {/* <img scr={review.tea.image} alt={review.tea.name}/> */}
          <p>Ingredients: {review.tea.ingredients}</p>
          <p>Origin: {review.tea.origin}</p>
        </div>

        <div className="column">
          <h5>{review.taste}</h5>
          <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} /></h5>
          <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
          <button className="ui small button">
            <i className="shopping large cart icon"></i>  
            <a className="a" href={review.tea.shop}> Shop </a>
          </button>
        </div> 
      </div>

      <div className="ui vertical divider"></div>
    </div>
  )
}

export default UserReviewList