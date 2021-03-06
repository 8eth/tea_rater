import React from 'react'
import TeaCard from './TeaCard'
import Search from './Search'

function TeaList({ teas, searchTerm, onChangeSearch}) {

    const searchedTeas = teas.filter ((tea) => 
        tea.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const mappedTeas = searchedTeas.map((tea) =>
        <TeaCard
            key={tea.id}
            tea={tea}
        />
    )

    return (
        <div className="container">
            <div className="center-content">
                <Search
                    searchTerm = {searchTerm}   
                    onChangeSearch = {onChangeSearch}
                />
            </div>

            <div className="ui grid">
                <div className="ui center aligned four wide row grid container">{mappedTeas}</div>
            </div>
            <br></br>
        </div>
    )
}

export default TeaList