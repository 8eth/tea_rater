import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import TeaReviewList from "./TeaReviewList"
import AddReview from "./AddReview"
import Map from "./Map"

function TeaDetail({ teas, user, reviews, setReviews }) {
  let { id } = useParams();

  const [showAddTeaForm, setShowAddTeaForm] = useState(false)

  if (teas === [] || teas.find(tea => tea.id == id) === undefined) {
    return (<div>loading</div>);
  } 

  let tea = teas.find(tea => tea.id == id)  

  const currentTeaReviews = reviews.filter((review) => review.tea.id == id)

  function handleAddTeaForm(e, showAddTeaForm){
    e.stopPropagation()
    setShowAddTeaForm(!showAddTeaForm)
  }

  const handleClickTeaShop = () => {
    window.open(tea.shop);
  }

  return (
    <div >
      <div className="ui items">
        <div className="item">
        
          <div>

            <div className="ui extra large image">
              <img src={tea.image} alt={tea.name}/>
              <h3>Tea Origin</h3>
            </div>

            <div className="center-content" key={tea.id}>
              <Map 
                tea={tea}
              />
            </div>
            
            <br></br>
            <br></br>
          </div>

          <div className="detail-container">
           
            <h2>{tea.name}</h2>
            <p className="divider"></p>
            <br/>
          
            <div className="content">
              <div className="ui placeholder segment"> 
                <div className="ui one column small grid">
                  <div className="column">
                    <h3>Description</h3>
                    <h5>{tea.description}</h5>

                    <h3>Ingredients</h3>
                    <h5>{tea.ingredients}</h5>
                    <br></br>
     
                    <button className="ui button" onClick={handleClickTeaShop}>
                      <i className="shopping large cart icon"></i>  
                      BUY IT FROM THE RETAILER
                    </button>

                    <button className="ui button" onClick={(e) => handleAddTeaForm(e, showAddTeaForm)}>
                      <i className="large edit icon"></i>  
                      Add a Review
                    </button>
                    <br></br>

                    {showAddTeaForm && 
                      <AddReview
                        key={user.id}
                        user={user}
                        tea={tea}
                        showAddTeaForm={showAddTeaForm}
                        setShowAddTeaForm={setShowAddTeaForm}
                        reviews = {reviews}
                        setReviews={setReviews}
                      />
                    }
                    <br></br>

                  </div>             
                 
                </div>
              </div>
              <p className="divider"></p>
              <h3>Reviews</h3>

              {currentTeaReviews.map((review) => {
                return (
                  <div className="ui segment" key={review.id}>
                    <TeaReviewList
                      review = {review}
                    />
                  </div>
                )
              })}

            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default TeaDetail