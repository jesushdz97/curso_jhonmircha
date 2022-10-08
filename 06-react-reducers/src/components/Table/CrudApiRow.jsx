import { useSelector } from '../../context'
import useServices from '../../services/useServices'

const CrudApiRow = ({ data }) => {
  const { id, name, age } = data
  const { deleteData } = useServices()
  const setDataToEdit = useSelector('setDataToEdit')

  const handleDelete = (id) => deleteData(id)
  const handleEdit = (data) => setDataToEdit(data)

  return (
    <tr>
      <td scope='row'> {id} </td>
      <td> {name} </td>
      <td> {age} </td>
      <td>
        <button
          className='btn btn-warning mx-1'
          onClick={() => handleEdit(data)}>
          Editar
        </button>
        <button
          className='btn btn-danger mx-1'
          onClick={() => handleDelete(id)}>
          Borrar
        </button>
      </td>
    </tr>
  )
}
export default CrudApiRow
