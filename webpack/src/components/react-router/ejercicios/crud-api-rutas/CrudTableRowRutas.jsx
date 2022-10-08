import React from 'react'
import { useNavigate } from 'react-router-dom'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { id, name, age } = el
  let navigate = useNavigate()

  const handleEdit = (el) => {
    setDataToEdit(el)
    navigate(`editar/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button
          onClick={() => handleEdit(el)}
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
