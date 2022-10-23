import { deletePerson, setToEdit } from '@/features/people/peopleSlice'
import { EDIT } from '@/routes'
import { destroy } from '@/services/peopleService'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const PeopleRow = ({ data }) => {
  const dispatch = useDispatch()
  const { id, name, lastname, age, sex } = data

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar registro?')) return
    await destroy(id)
    dispatch(deletePerson(id))
  }

  const handleEdit = (data) => dispatch(setToEdit(data))

  /** slug para no poner el id en el ruta del id */
  const slugName = (data) => `${data.name}-${data.lastname}`.toLowerCase()

  return (
    <tr className='fw-light'>
      <td>{name} </td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{sex}</td>

      <td className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-1'>
        <Link to={`${EDIT}/${slugName(data)}`}>
          <Button variant='warning' size='sm' onClick={() => handleEdit(data)}>
            Editar
          </Button>
        </Link>

        <Button variant='danger' size='sm' onClick={() => handleDelete(id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  )
}

export default PeopleRow
