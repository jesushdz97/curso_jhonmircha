import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { id, name, age } = el
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default CrudTableRow
