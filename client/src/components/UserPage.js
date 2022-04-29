import React from 'react'
import UserReviewList from './UserReviewList'

function UserPage({ user }) {

  return (

    <div className="home-border">
      <br></br>
      <div className="center-content">
        <img className="ui small circular image" src={user.picture} alt="default"></img> 
      </div>
      <h2>{user.username}</h2>
      <p className="divider"></p>
      <h4>{user.bio}</h4>
      <p className="divider"></p>


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