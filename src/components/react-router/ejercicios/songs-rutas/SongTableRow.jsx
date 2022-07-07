import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongTableRow = ({ key, el, handleDeleteSong }) => {
  console.log(el)
  let navigate = useNavigate()

  return (
    <tr key={key}>
      <th scope='row'> {key} </th>
      <td>
        <img src='https://placeimg.com/40/40/animals' alt='' />
      </td>

      <td>Nombre del Artista</td>
      <td>Nombre de la canción</td>

      <td>
        <input
          type='button'
          value='Ver'
          className='btn btn-sm btn-primary mx-1'
          onClick={navigate(`canciones/${key}`)}
        />
        <input
          type='button'
          value='Eliminar'
          className='btn btn-sm btn-danger mx-1'
          onClick={() => handleDeleteSong(key)}
        />
      </td>
    </tr>
  )
}

export default SongTableRow
