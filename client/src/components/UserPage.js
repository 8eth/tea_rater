import React from 'react'
import UserReviewList from './UserReviewList'

function UserPage({ user }) {

  return (

    <div className="container">
      <h2>{user.username}</h2>
      <h2>{user.bio}</h2>

      {user.reviews.map((review) => {
        return (
          <div className="ui segment">
            <UserReviewList
              user = {user}
              key = {review.id}
              review = {review}
            />
          </div>
        )
      })}
  
    </div>
  )
}

export default UserPage