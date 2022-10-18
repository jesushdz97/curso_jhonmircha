import { deletePerson } from '@/features/people/peopleSlice'
import { destroy } from '@/services/peopleService'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const PeopleRow = ({ data }) => {
  const dispatch = useDispatch()
  const { id, name, lastname, age, sex } = data

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar registro?')) return
    await destroy(id)
    dispatch(deletePerson(id))
  }

  const handleEdit = () => {
    
  }

  return (
    <tr className='fw-light'>
      <td>{name} </td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{sex}</td>

      <td className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-1'>
        <Button variant='warning' size='sm'>
          Editar
        </Button>
        <Button variant='danger' size='sm' onClick={() => handleDelete(id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  )
}

export default PeopleRow
