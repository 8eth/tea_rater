import React, {useState} from 'react'
import UserReviewList from './UserReviewList'

function UserPage({ user, reviews }) {
  const [userReviews, setUserReviews] = useState(reviews)

  return (

    <div className="home-border">
      <br></br>
      <div className="center-content">
        <img className="ui small circular image" src={user.picture} alt="default"></img> 
      </div>
      <h2>@{user.username}</h2>
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
              userReviews={userReviews}
              setUserReviews = {setUserReviews}
            />
          </div>
        )
      })}
  
    </div>
  )
}

export default UserPage