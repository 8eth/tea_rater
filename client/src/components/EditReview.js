import React,{ useState } from 'react'

function EditReview({ review, showEditForm, setShowEditForm, reviews, setReviews }) {
    
    const [formData, setFormData] = useState ({ 
        taste: review.taste,
        rating: review.rating,
        recommend: review.recommend
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
            const updatedReviews = reviews.map(review => review.id === editedReview.id ? editedReview : review) 
            setReviews(updatedReviews)
        })
        .then(setShowEditForm(!showEditForm))
    }

    return (
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Review</label>
                    <textarea 
                        name="taste" 
                        type="text"
                        rows="2"
                        cols="80"
                        id={FormData.taste}
                        value={formData.taste}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <br></br>

                <div className="form-group col-5">
                    <label>Rating {" "}</label>
                    <input 
                        name="rating" 
                        type="range" 
                        min="0" 
                        max="5"
                        id={FormData.rating}
                        value={formData.rating}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <br></br>

            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Recommend? </label>
                    <input
                        className="ui checkbox" 
                        name="recommend" 
                        type="checkbox" 
                        id={FormData.recommend}
                        defaultChecked={review.recommend}
                        value={formData.recommend}
                        onChange={(e) => { setFormData({
                                    ...formData,
                                    recommend: !formData.recommend
                                })
                                review.recommend = !review.recommend
                                const updatedReviews = reviews.map(r => r.id === review.id ? review : r) 
                                setReviews(updatedReviews)                        
                            }
                        }
                    />
                </div>
            </div>
            <br></br>
            
            <button className="ui submit green button center" type="submit">Submit</button>
        </form>
    )
}

export default EditReview