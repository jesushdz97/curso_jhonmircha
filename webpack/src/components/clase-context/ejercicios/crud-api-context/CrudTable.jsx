import React from 'react'
import { useCrudContext } from '../../../../context/crudContext'
import CrudTableRow from './CrudTableRow'

const styles = {
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const CrudTable = () => {
  // const { db } = useContext(crudContext)
  const { db } = useCrudContext()

  return (
    <div style={styles} className='container border p-2'>
      <h3 className='text-uppercase border-bottom'>Tabla de Datos</h3>
      <table className='table table-striped text-center'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan={3} style={{ color: 'gray' }}>
                No hay datos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
