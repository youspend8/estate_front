import React from 'react';
import './Table.scss';

const Table = ({ headers, children, width }) => {
  return (
    <>
      <table className="table" style={{width: width, margin: '0 auto'}}>
        <thead>
          <tr>
            {
              headers.map((item, index) => (
                <th key={index} style={item.style}>{item.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          { children }
        </tbody>
      </table>
    </>
  )
}

const TableRow = ({ children }) => {
  return (
    <tr className="table_body_row">
      { children }
    </tr>
  )
}

const TableColumn = ({ children }) => {
  return (
    <td className="table_column">
      { children }
    </td>
  )
}

export {
  Table,
  TableRow,
  TableColumn
}