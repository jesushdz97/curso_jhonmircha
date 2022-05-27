import React from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div className='container border border-warning p-1 mt-1'>
      <h4>Detalle de Canciones</h4>
      <div className='row'>
        <div className='col p-2'>
          <SongArtist />
        </div>
        <div className='col p-2'>
          <SongLyrics />
        </div>
      </div>
    </div>
  )
}

export default SongDetails
