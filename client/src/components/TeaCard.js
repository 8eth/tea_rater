import React from 'react'

function TeaCard({ tea }) {
  return (
    <div className='center aligned cards'>
        <div className='ui card'>

            <h4>{tea.name}</h4>
            <img src={tea.image} alt={tea.name}/>
            {/* <h5>{tea.description}</h5>
            <h5>{tea.ingredients}</h5>
            <h5>{tea.origin}</h5>
            <h5>{tea.shop}</h5> */}

        </div>
        <br></br>


    </div>
  )
}

export default TeaCard