import React from 'react'
import SongTableRow from './SongTableRow'

const SongTable = ({ mySongs, handleDeleteSong }) => {
  return (
    <div className='container text-center border p-3 my-2'>
      <h3> Mis Canciones Favoritas </h3>
      <table className='table'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'> #</th>
            <th scope='col' colSpan='2'>
              Artista
            </th>
            <th scope='col'> Canción </th>
            <th scope='col'> Acciones </th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                id={index}
                el={el}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan='6'> Sin Canciones </td>
            </tr>
          )}
          {/* <SongTableRow /> */}
        </tbody>
      </table>
    </div>
  )
}

export default SongTable
