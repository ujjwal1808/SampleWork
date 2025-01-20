import React from 'react'

const Table = (props) => {
    
  return (
    <div>
       
      <table className="min-w-full border-collapse border border-gray-300 rounded-xl shadow-sm">
        <thead >
          <tr className="bg-gray-100">
            {props.columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-3 text-sm font-medium text-gray-700 text-left border-b border-gray-300"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tdata.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {props.columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-3 text-sm text-gray-600 border-b border-gray-300"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
 
    </div>
  )
}

export default Table