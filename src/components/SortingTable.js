import React, { useMemo } from 'react'
import {  useSortBy, useTable } from 'react-table'
import MOCK_DATA from '../assets/MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'

export const SortingTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  }, useSortBy)

  return (
    <>
      <table className="mx-auto table table-dark table-striped table-bordered" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                <span>
                    {column.isSorted ? (column.isSortedDesc ? <span> &#8675;</span> : <span>&#8673;</span>) : ''}
                </span>
                </th>
              ))} 
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
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
    </>
  )
}