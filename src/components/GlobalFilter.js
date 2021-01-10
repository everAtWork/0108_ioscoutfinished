import React from 'react'

export const GlobalFilter = ( {  filter, setFilter}) => {
    return (
        <div className="input-div">
            <input placeholder="Поиск авторов по имени"  value={filter || ''} type="text" onChange={e => setFilter(e.target.value)} /> 
        </div>
    )
}
