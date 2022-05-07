import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import TeaReviewList from "./TeaReviewList"
import AddReview from "./AddReview"
import Map from "./Map"

function TeaDetail({ teas, user }) {
  let { id } = useParams();

  const [teaReviews, setTeaReviews] = useState([])
  const [showAddTeaForm, setShowAddTeaForm] = useState(false)


  if (teas === [] || teas.find(tea => tea.id == id) === undefined || teaReviews === []) {
    return (<div>loading</div>);
  }
  
  let tea = teas.find(tea => tea.id == id)  

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

            <div className="center-content">
              <Map 
                key={user.id}
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
                        teaReviews={teaReviews}
                        setTeaReviews={setTeaReviews}
                        user={user}
                        tea={tea}
                        showAddTeaForm={showAddTeaForm}
                        setShowAddTeaForm={setShowAddTeaForm}
                      />
                    }
                    <br></br>

                  </div>             
                 
                </div>
              </div>
              <p className="divider"></p>
              <h3>Reviews</h3>

              {tea.reviews.map((review) => {
                return (
                  <div className="ui segment">
                    <TeaReviewList
                      key = {review.id}
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