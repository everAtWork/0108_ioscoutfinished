import React, { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../assets/MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'

export const FilteringTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data
  },  useGlobalFilter, useSortBy , usePagination )

  const { globalFilter } = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table className="mt-1 mx-auto w-100 table table-responsive-sm table-dark table-striped table-hover" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                <span>
                    {column.isSorted ? (column.isSortedDesc ? <span> &#8675;</span> : <span>&#8673;</span>) : ''}
                </span></th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })} 
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="btn-div">
          <button onClick={() => previousPage()} className="navbtn btn btn-dark m-1">Previous</button>
          <button onClick={() => nextPage()} className="navbtn btn btn-dark m-1">Next</button>
          </div>
    </>
  )
}