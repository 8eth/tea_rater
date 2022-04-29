import React from 'react'
import { Rating } from 'semantic-ui-react' 

function TeaReviewList({ review }) {
    
    return (
        <div className="ui placeholder segment">
            <div className="ui two column small grid">
                <div className="column">
                    <i className="large user icon"></i>  
                    <h4>{review.user.username}</h4>
                    <i className="large arrow alternate circle right icon"></i>  
                </div>

                <div className="column">
                    <h5>{review.taste}</h5>
                    <h5><Rating icon="star" defaultRating={review.rating} maxRating={5} disabled/></h5>
                    <h5>Recommend? {review.recommend ? "Yes ✅ " : "No ❌ " }</h5>
                </div>
            </div>

            <div className="ui vertical divider"></div>

        </div>
        
    )
}

export default TeaReviewList