import React, {useState} from 'react'

function AddReview({ teaReviews, setTeaReviews, user, tea }) {
    // console.log(teaReviews)
    const [errors, setErrors] = useState([]);

    const [formData, setFormData] = useState({
      taste: "",
      rating: "",
      recommend: "",
      user_id: user.id,
      tea_id: tea.id
    })
  
    const initialFormState = {
      taste: "",
      rating: "",
      recommend: ""
    }
    
    function onCreateReview(newReview) {
      setTeaReviews([...teaReviews, newReview])
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
      // .then((r) => {
      //     if (r.ok) {
      //       r.json().then((teaReviews) => onCreateReview(teaReviews));
      //   } else {
      //       r.json().then((err) => setErrors(err.errors));
      //   } 
      // })
      .then(setFormData(initialFormState));
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
                <label htmlFor="taste">Review:</label>
                <input
                  name="taste"
                  type="text"
                  id={FormData.taste}
                  value={formData.taste}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="rating">Rating</label>
                <input
                  name="rating"
                  type="text"
                  id={FormData.rating}
                  value={formData.rating}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="recommend">Recommend?</label>
                <input
                  name="recommend"
                  type="text"
                  id={FormData.recommend}
                  value={formData.recommend}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <br></br>
                <button className="ui submit button center" type="submit">Post</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default AddReview