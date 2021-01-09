import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
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
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data
  }, useGlobalFilter)

  const { globalFilter } = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table className="mx-auto w-75 table-bordered" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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