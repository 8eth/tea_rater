import React from 'react'
import TeaCard from './TeaCard'
import Search from './Search'

function TeaList({ teas, searchTerm, onChangeSearch}) {
    const mappedTeas = teas.map((tea) =>
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
        </div>
    )
}

export default TeaList