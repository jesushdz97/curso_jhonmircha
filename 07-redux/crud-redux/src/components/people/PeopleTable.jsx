import { usePeopleState } from '@/app/store'
import { PeopleRow } from '.'

const PeopleTable = () => {
  let people = usePeopleState()

  return (
    people && (
      <table className='table table-striped table-hover text-center'>
        <thead>
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
      </table>
    )
  )
}
export default PeopleTable
