import React from 'react'
// import { Rating } from 'semantic-ui-react' 

function TeaReviewList({ review }) {
  return (
    <div className="content">
        <p className="divider"></p>

        <h3>Reviews</h3>
        <p className="divider"></p>


        <h5>Review: {review.taste}</h5>
        <h5>Rating: {review.rating}</h5>
        <h5>Recommend? {review.recommend ? "Yess!!" : "No Way!" }</h5>
        <p className="divider"></p>


    </div>
  )
}

export default TeaReviewList