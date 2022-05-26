import React from 'react'
import CrudTableRow from './CrudTableRow'

const styles = {
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const CrudTable = ({ data }) => {
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
            <td colSpan={3}> No hay datos </td>
          ) : (
            data.map((el) => (
              <CrudTableRow key={el.id} name={el.name} age={el.age} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
