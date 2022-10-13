import { CREATE } from '@/routes'
import { Link } from 'react-router-dom'
import { PeopleTable, PeopleRow, PeopleTemplate } from '../people'

const People = () => {
  return (
    <PeopleTemplate>
      <div className='container mt-5'>
        <div className='text-end mb-3'>
          <Link to={CREATE} className='btn btn-primary'>
            Crear Persona
          </Link>
        </div>

        <PeopleTable />
      </div>
    </PeopleTemplate>
  )
}
export default People
