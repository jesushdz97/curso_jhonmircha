import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { id, name, age } = el
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button
          onClick={() => setDataToEdit(el)}
          className='btn btn-outline-dark mx-1'>
          Editar
        </button>
        <button
          onClick={() => deleteData(id)}
          className='btn btn-outline-dark mx-1'>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default CrudTableRow
