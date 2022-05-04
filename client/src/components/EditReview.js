import React,{ useState } from 'react'

function EditReview({ review, userReviews, setUserReviews, showEditForm, setShowEditForm }) {
    
    const [formData, setFormData] = useState ({ 
        taste: review.taste,
        rating: review.rating,
        recommend: review.recommend
        // recommend: review.recommend ? "Yes" : "No"
    })

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) { 
        e.preventDefault();

        const editedReview = {
            taste: formData.taste,
            rating: formData.rating,
            recommend: formData.recommend 
       }

        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedReview)
        })
        .then(response => response.json())
        .then(editedReview => {
            const updatedReviews = userReviews.map(review => review.id === editedReview.id ? editedReview : review) 
            setUserReviews(updatedReviews)
        })
        .then(setShowEditForm(!showEditForm))
    }

    return (
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Review</label>
                    <input 
                        name="taste" 
                        type="text"
                        id={FormData.taste}
                        value={formData.taste}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group col-5">
                    <label>Rating</label>
                    <input 
                        name="rating" 
                        type="text" 
                        id={FormData.rating}
                        value={formData.rating}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Recommend? </label>
                    <input 
                        name="recommend" 
                        type="text" 
                        id={FormData.recommend}
                        value={formData.recommend}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <br></br>
            <button className="ui submit green button center" type="submit">Submit</button>
        </form>
    )
}

export default EditReview