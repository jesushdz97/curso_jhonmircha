import React from 'react'
import CrudTableRowRutas from '../crud-api-rutas/CrudTableRowRutas'

const styles = {
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
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
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRowRutas
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
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
