import { usePeopleState } from '@/app/store'
import { Table } from 'react-bootstrap'
import { PeopleRow } from '.'

const PeopleTable = () => {
  let state = usePeopleState()
  let people = state.people

  return (
    people && (
      <Table striped hover className='text-center'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <PeopleRow key={person.id} data={person} />
          ))}
        </tbody>
      </Table>
    )
  )
}
export default PeopleTable
