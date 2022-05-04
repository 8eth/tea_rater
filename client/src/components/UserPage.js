import React, {useState} from 'react'
import UserReviewList from './UserReviewList'
import EditBio from './EditBio'

function UserPage({ user }) {
  const [userReviews, setUserReviews] = useState(user.reviews)
  const [userBio, setUserBio] = useState(user.bio)
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
      {/* <h4>{user.bio}</h4>

      <button className="ui small black basic button" onClick={(e) => handleEditForm(e, showEditForm)}>
        <i className="large edit icon"></i>  
        Edit Bio
      </button> */}
      <br></br>
      <br></br>
      {showEditForm && 
        <EditBio 
          key={user.id} 
          user={user}
          userBio={userBio} 
          setUserBio={setUserBio}
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
        />
      }

      <p className="divider"></p>

      {userReviews.map((review) => {
        return (
          <div className="ui segment">
            <UserReviewList
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