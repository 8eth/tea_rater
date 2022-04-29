import React from 'react'
import { Rating } from 'semantic-ui-react' 

function UserReviewList({ review }) {
  return (
    <div className="container">

      {/* {review.tea.map((review) => {
        return (
          <div className="ui segment">
            <UserReviewList
              user = {user}
              key = {review.id}
              review = {review}
            />
          </div>
        )
      })} */}

      <div className="column">
        <i className="coffee icon"></i>  
        <h4>{review.tea.name}</h4>


      </div>
        
        <div className="column">
          <h5>{review.taste}</h5>
          <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} disabled/></h5>
          <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
        </div>
      
      
  
    </div>
  )
}

export default UserReviewList