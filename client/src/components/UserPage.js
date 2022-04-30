import React, {useState} from 'react'
import UserReviewList from './UserReviewList'
import EditBio from './EditBio'

function UserPage({ user, reviews }) {
  const [userReviews, setUserReviews] = useState(reviews)
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  return (

    <div className="home-border">
      <br></br>
      <div className="center-content">
        <img className="ui small circular image" src={user.picture} alt="default"></img> 
      </div>
      <h2>@{user.username}</h2>
      <p className="divider"></p>
      <h4>{user.bio}</h4>

      <button className="ui small black basic button" onClick={(e) => handleEditForm(e, showEditForm)}>
        <i className="large edit icon"></i>  
        Edit Bio
      </button>
      <br></br>
      <br></br>
      {showEditForm && <EditBio key={user.id} user={user} />}

      <p className="divider"></p>


      {user.reviews.map((review) => {
        return (
          <div className="ui segment">
            <UserReviewList
              user = {user}
              key = {user.id}
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