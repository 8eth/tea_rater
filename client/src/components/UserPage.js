import React, {useState} from 'react'
import UserReviewList from './UserReviewList'
import EditBio from './EditBio'

function UserPage({ user, setUser, reviews, setReviews }) {
  const [userReviews, setUserReviews] = useState(user.reviews)
  const [userBio, setUserBio] = useState(user.bio)
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  const currentUserReviews = reviews.filter((review) => review.user.id == user.id)

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
      {showEditForm && 
        <EditBio 
          key={user.id} 
          user={user}
          setUser={setUser} ////
          userBio={userBio} 
          setUserBio={setUserBio}
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
        />
      }

      <p className="divider"></p>

      {currentUserReviews.map((review) => {
        return (
          <div className="ui segment" key={review.id}>
            <UserReviewList
              review = {review}
              userReviews={userReviews}
              setUserReviews = {setUserReviews}
              reviews = {reviews}
              setReviews={setReviews}
            />
          </div>
        )
      })}

    </div>
  )
}

export default UserPage