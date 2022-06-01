import React from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'
import Message from '../crud-api/Message'

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null
  return (
    <div className='container border border-warning p-1 mt-1'>
      <h4 className='text-uppercase'>Detalle de Canciones</h4>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 p-2'>
          {bio.artists ? (
            <SongArtist bio={bio} />
          ) : (
            <Message
              message={`Error: No existe el intérprete [${search.artist}]`}
              bgColor='#DC3545'
            />
          )}
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 p-2'>
          {!lyric.lyrics ? (
            <Message
              message={'Error: Servidor ó Letra no encontrada'}
              bgColor='#DC3545'
            />
          ) : (
            <SongLyrics title={search.song} lyric={lyric} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SongDetails
