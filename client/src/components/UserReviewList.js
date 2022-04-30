import React, {useState} from 'react'
import { Rating } from 'semantic-ui-react' 
import EditReview from './EditReview'

function UserReviewList({ review, userReviews, setUserReviews }) {
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
  }

  const deleteReview = (id) => {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUserReviews(userReviews.filter((review) => review.id !== id));
      }
    });
  }

  return (
    <div className="ui placeholder segment">
      <div className="ui two column small grid">

        <div className="column">
          <i className="large coffee icon"></i>  
          <h4>{review.tea.name}</h4>
          {/* <img scr={review.tea.image} alt={review.tea.name}/> */}
          <p>Ingredients: {review.tea.ingredients}</p>
          <p>Origin: {review.tea.origin}</p>
          <button className="ui small black basic button">
            <i className="shopping large cart icon"></i>  
            <a className="a" href={review.tea.shop}> Shop </a>
          </button>
        </div>

        <div className="column">
          <h5>{review.taste}</h5>
          <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} disabled/></h5>
          <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
          <br></br>

          <button className="ui small black basic button" onClick={(e) => handleEditForm(e, showEditForm)}>
            <i className="large edit icon"></i>  
            Edit
          </button>

          <button className="ui small red basic button" onClick={(e)=> deleteReview(review.id)}>
            <i className="large trash icon"></i>  
            Delete
          </button>

          {showEditForm && <EditReview key={review.id} review={review} />}

        </div> 
      </div>

      <div className="ui vertical divider"></div>
    </div>
  )
}

export default UserReviewList