import { URL } from '@/env'
import { CREATE } from '@/routes'
import { Link } from 'react-router-dom'
import { PeopleTable, PeopleTemplate } from '../people'
import { AlertMessage } from '..'
import { clearDataToEdit, readAllPeople } from '@/features/people/peopleSlice'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import useFetch from '@/hooks/useFetch'

const IndexPeople = () => {
  const { error } = useFetch(URL, readAllPeople)

  return (
    <PeopleTemplate>
      <div className='container mt-5'>
        {!error && <CreateButton />}
        {!error ? <PeopleTable /> : <AlertMessage serverError={error} />}
      </div>
    </PeopleTemplate>
  )
}

const CreateButton = () => {
  const dispatch = useDispatch()
  return (
    <Link to={CREATE}>
      <Button
        variant='primary'
        className='mb-4'
        onClick={() => dispatch(clearDataToEdit())}
      >
        Crear Registro
      </Button>
    </Link>
  )
}

export default IndexPeople
