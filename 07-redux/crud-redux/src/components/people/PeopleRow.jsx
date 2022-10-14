import { deletePerson } from '@/features/people/peopleSlice'
import { destroy } from '@/services/peopleService'
import { useDispatch } from 'react-redux'

const PeopleRow = ({ data }) => {
  const { id, name, lastname, age, sex } = data
  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{sex}</td>
      <ActionsButtons id={id} />
    </tr>
  )
}

const ActionsButtons = ({ id }) => {
  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar registro?')) return
    await destroy(id)
    dispatch(deletePerson(id))
  }

  return (
    <td className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-1'>
      <button className='btn btn-sm btn-warning'>Editar</button>
      <button
        className='btn btn-sm btn-danger'
        onClick={() => handleDelete(id)}
      >
        Eliminar
      </button>
    </td>
  )
}

export default PeopleRow
