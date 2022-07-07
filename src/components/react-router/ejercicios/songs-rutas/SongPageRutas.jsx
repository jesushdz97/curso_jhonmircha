import React from 'react'
import { useParams } from 'react-router-dom'
import SongDetailsRutas from './SongDetailsRutas'

const SongPageRutas = ({ mySongs }) => {
  let { id } = useParams()
  let { bio, lyric, search } = mySongs[id]

  return (
    <div className='container'>
      <SongDetailsRutas search={search} lyric={lyric} bio={bio} />
    </div>
  )
}

export default SongPageRutas
