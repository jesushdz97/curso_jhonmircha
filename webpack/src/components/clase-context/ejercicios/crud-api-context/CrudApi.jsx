import React from 'react'
import { useCrudContext } from '../../../../context/crudContext'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'

const CrudApi = () => {
  // const { db, loading, error } = useContext(crudContext)
  const { db, loading, error } = useCrudContext()

  return (
    <div className='container'>
      <h2 className='text-center fw-bold'>Crud API: JSON SERVER </h2>
      <CrudForm />
      {loading && <Loader />}
      {error && (
        <Message
          message={`Error ${error.status}: ${error.statusText}`}
          bgColor={'#dc3545'}
        />
      )}
      {db && <CrudTable />}
    </div>
  )
}

export default CrudApi
