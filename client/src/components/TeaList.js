import React from 'react'
import TeaCard from './TeaCard'

function TeaList({ teas }) {

    const mappedTeas = teas.map((tea) =>
        <TeaCard
            key={tea.id}
            tea={tea}
        />
    )

    return (
        <div className="container">
            <div className="ui grid">
                <div className="ui center aligned four wide row grid container">{mappedTeas}</div>
            </div>
        </div>
    )
}

export default TeaList