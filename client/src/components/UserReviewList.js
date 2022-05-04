import React, {useState} from 'react'
import { Rating } from 'semantic-ui-react' 
import EditReview from './EditReview'

function UserReviewList({ review, userReviews, setUserReviews }) {
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  const handleClickTeaShop = () => {
    window.open(review.tea.shop);
  }

  const deleteReview = (review) => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
    const newReviews = userReviews.filter(UserReviewId => UserReviewId !== review)
    setUserReviews(newReviews)
  }

  function handleDelete(e){
    e.stopPropagation()
    deleteReview(review)
  }

  return (
    <div className="ui placeholder segment">
      <div className="ui two column small grid">

        <div className="column">

          <i className="large coffee icon"></i>  
          <h4>{review.tea.name}</h4>
          <p>Ingredients: {review.tea.ingredients}</p>
          <p>Origin: {review.tea.origin}</p>

          <button className="ui black basic button" onClick={handleClickTeaShop}>
            <i className="shopping cart icon"></i>  
            Shop
          </button>

        </div>

        <div className="column">
          
          <h5>{review.taste}</h5>
          <h5><Rating icon="star" rating={review.rating} maxRating={5} disabled/></h5>
          <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
          <br></br>

          <button className="ui small black basic button" onClick={(e) => handleEditForm(e, showEditForm)}>
            <i className="large edit icon"></i>  
            Edit
          </button>

          <button className="ui small red basic button" onClick={e => handleDelete(e)}>
            <i className="large trash icon"></i>  
            Delete
          </button>

          {showEditForm && 
            <EditReview 
              key={review.id} 
              review={review} 
              userReviews={userReviews}
              setUserReviews={setUserReviews}
              showEditForm={showEditForm}
              setShowEditForm={setShowEditForm}
            />
          }

        </div> 
      </div>

      <div className="ui vertical divider"></div>
    </div>
  )
}

export default UserReviewList