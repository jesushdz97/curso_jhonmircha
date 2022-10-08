import { useEffect } from 'react'
import { useCrudApiState, useSelector } from '../../context'
import { useServices } from '../../services'
import CrudApiRow from './CrudApiRow'
import ErrorByServer from '../ErrorByServer'

const CrudApiTable = () => {
  const { getFamily } = useServices()
  const { family } = useCrudApiState()
  const errorServer = useSelector('errorServer')

  useEffect(() => {
    getFamily()
  }, [])

  const renderFamily = () =>
    family.map((data, key) => <CrudApiRow key={key} data={data} />)

  if (errorServer) return <ErrorByServer message={errorServer} />

  return (
    <div className='container'>
      <table className='table text-center'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Edad</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>{renderFamily()}</tbody>
      </table>
    </div>
  )
}

export default CrudApiTable
