import { usePeopleState } from '@/app/store'
import useServices from '@/hooks/useServices'
import { useEffect } from 'react'
import { PeopleRow } from '.'

const PeopleTable = () => {
  const { peopleService } = useServices()
  let people = usePeopleState()

  useEffect(() => {
    peopleService().fetchData()
  }, [])

  return (
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
}
export default PeopleTable
