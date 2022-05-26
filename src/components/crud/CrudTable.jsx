import React from 'react'
import CrudTableRow from './CrudTableRow'

const styles = {
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}


const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div style={styles}>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <td colSpan={3} style={{color: 'gray'}} > No hay datos </td>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
