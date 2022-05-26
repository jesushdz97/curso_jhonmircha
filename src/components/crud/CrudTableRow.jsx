import React from 'react'

const CrudTableRow = ({ name, age }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  )
}

export default CrudTableRow
