import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongTableRow = ({ id, el, handleDeleteSong }) => {
  let { artist, song } = el.search
  let { strArtistThumb } = el.bio.artists[0]
  let navigate = useNavigate()

  return (
    <tr>
      <th scope='row'> {id} </th>
      <td>
        <img
          src={strArtistThumb}
          alt={artist}
          style={{ width: 'auto', height: '40px' }}
        />
      </td>

      <td>{artist}</td>
      <td>{song}</td>

      <td>
        <input
          type='button'
          value='Ver'
          className='btn btn-sm btn-primary m-1'
          onClick={() => navigate(`${id}`)}
        />
        <input
          type='button'
          value='Eliminar'
          className='btn btn-sm btn-danger m-1'
          onClick={() => handleDeleteSong(id)}
        />
      </td>
    </tr>
  )
}

export default SongTableRow
