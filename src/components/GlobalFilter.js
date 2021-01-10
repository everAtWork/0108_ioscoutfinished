import React from 'react'

export const GlobalFilter = ( {  filter, setFilter}) => {
    return (
        <div className="input-div">
            <label htmlFor="search">🔍</label>
Size            <input autoFocus  id="search" placeholder="Поиск авторов"  value={filter || ''} type="text" onChange={e => setFilter(e.target.value)} /> 
        </div>
    )
}
