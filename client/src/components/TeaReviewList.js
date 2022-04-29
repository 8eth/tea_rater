import React from 'react'
import { Rating } from 'semantic-ui-react' 

function TeaReviewList({ review }) {
  return (
    <div className="ui placeholder segment">
        <div className="ui two column small grid">
            <div className="column">
                {/* <p className="divider"></p> */}
                <h5>{review.taste}</h5>
                <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} /></h5>
                <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
                {/* <p className="divider"></p> */}
            </div>


            <div className="column">
                {/* <p className="divider"></p> */}
                <h5>{review.taste}</h5>
                <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} /></h5>
                <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
                {/* <p className="divider"></p> */}
            </div>
        </div>

        <div class="ui vertical divider"></div>

    </div>
        
  )
}

export default TeaReviewList