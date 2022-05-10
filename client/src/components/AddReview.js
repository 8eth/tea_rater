import React, { useState } from 'react'

function AddReview({ user, tea, showAddTeaForm, setShowAddTeaForm, reviews, setReviews }) {
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    taste: "",
    rating: 0,
    recommend: false,
    user_id: user.id,
    tea_id: tea.id
  })

  const initialFormState = {
    taste: "",
    rating: "",
    recommend: ""
  }
  
  function onCreateReview(newReview) {
    setReviews([...reviews, newReview])
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
  
    const newReview = {
      taste: formData.taste,
      rating: formData.rating,
      recommend: formData.recommend,
      user_id: user.id,
      tea_id: tea.id
    }
      
    fetch(`/reviews`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
    .then(response => response.json())
    .then((teaReviews) => onCreateReview(teaReviews))
    .then(setFormData(initialFormState))
    .then(setShowAddTeaForm(!showAddTeaForm))
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="background">
      <div className="form-border center-content">
        <div className="ui grid">
          <form 
            className="ui two fields form center"
            onSubmit={(e) => handleSubmit(e)}
            >
              
            <div>
            {errors.map((error) => (
                <ul className="errors">- {error}</ul>
            ))}
            </div>

            <label htmlFor="taste">Review </label>
            <textarea
              name="taste"
              type="text"
              rows="4"
              cols="80"
              id={FormData.taste}
              value={formData.taste}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <br></br>   

            <label htmlFor="rating">Rating {" "}</label>
            <br></br>
            <input
              name="rating"
              type="range"
              min="0" 
              max="5"
              id={FormData.rating}
              value={formData.rating}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <br></br> 

            <label htmlFor="recommend"> {" "} Would you Recommend this tea? {" "}</label>
            <input
              className="ui checkbox"
              name="recommend"
              type="checkbox"
              id={FormData.recommend}
              defaultChecked={false}
              value={formData.recommend ? formData.recommend=true : formData.recommend=false}
              onChange={(e) => handleChange(e)}
            />
            <br></br>
            <br></br>

            <button className="ui submit green button center" type="submit">Post</button>
            
            <br></br>
            <br></br>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddReview