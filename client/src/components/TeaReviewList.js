import React from 'react'
import { Rating } from 'semantic-ui-react' 

function TeaReviewList({ review }) {
  return (
      
    <div className="content">
        <p className="divider"></p>

        <h3>Reviews</h3>
        <div className="ui card">
        <p className="divider"></p>

        
        <p className="divider"></p>


        <h5>{review.taste}</h5>
        <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} /></h5>
        <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>

        <p className="divider"></p>
        </div>
        
    </div>
  )
}

export default TeaReviewList