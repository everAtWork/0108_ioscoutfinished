import React from 'react'

export const GlobalFilter = ( {  filter, setFilter}) => {
    return (
        <div className="mx-auto"  >
            Search: {''}
            <input value={filter || ''} type="text" onChange={e => setFilter(e.target.value)} /> 
        </div>
    )
}
