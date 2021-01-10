import React, { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'
import MOCK_DATA from '../assets/MOCK_DATA.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import Avatar from 'react-avatar';

export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  console.log(data)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data
  },  useGlobalFilter, useSortBy , usePagination )

  const { globalFilter, pageIndex } = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table className="mx-auto w-100 table-dark table-striped table table-responsive-sm table table-hover" {...getTableProps()}>
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
          <span>
              Page{' '}
              <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
          </span>

          <button disabled={!canPreviousPage} onClick={() => gotoPage(0)} className="btn btn-dark">
              {'<<'}
          </button>
          <button disabled={!canPreviousPage} onClick={() => previousPage()} className="navbtn btn btn-dark m-1">Previous</button>
          <button disabled={!canNextPage} onClick={() => nextPage()} className="navbtn btn btn-dark m-1">Next</button>
          <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)} className="btn btn-dark">
              {'>>'}
          </button>
          <Avatar round={true} maxInitials={1} textSizeRatio={4} size="64" name="Foo Bar" />
          </div>
    </>
  )
}