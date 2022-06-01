import React from 'react'

const SongLyrics = ({ lyric, title }) => {
  return (
    <div>
      <h5 className='text-uppercase'> {`Canción: ${title}`} </h5>
      <p style={{whiteSpace: 'pre-wrap'}}>{lyric.lyrics}</p>
      
    </div>
  )
}

export default SongLyrics
