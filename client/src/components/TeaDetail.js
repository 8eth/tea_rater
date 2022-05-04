import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import TeaReviewList from "./TeaReviewList"
import AddReview from "./AddReview"
import Map from "./Map"

function TeaDetail({ teas, user }) {
  let { id } = useParams();
  let tea = teas.find(tea => tea.id == id)    

  // if (tea === undefined) {
  //   // return (<div>loading</div>)
  //   console.log("tea is undefined")
  // } else {    
  //   console.log("tea is defined")
  // }

  const [teaReviews, setTeaReviews] = useState(tea.reviews)
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditForm(e, showEditForm){
    e.stopPropagation()
    setShowEditForm(!showEditForm)
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
              {/* <h5>{tea.origin}</h5>  */}
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

                    <button className="ui button" onClick={(e) => handleEditForm(e, showEditForm)}>
                      <i className="large edit icon"></i>  
                      Add a Review
                    </button>
                    <br></br>

                    {showEditForm && 
                      <AddReview
                        key={user.id}
                        teaReviews={teaReviews}
                        setTeaReviews={setTeaReviews}
                        user={user}
                        tea={tea}
                      />
                    }
                    <br></br>

                  </div>             
                 
                </div>
              </div>
              <p className="divider"></p>
              <h3>Reviews</h3>

              {teaReviews.map((review) => {
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