import React, { useState, useEffect } from 'react'
import Loader from '../crudApi/Loader'
import SongDetails from './SongDetails'
import SongFom from './SongFom'

const SearchSongs = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleSearch = (data) => setSearch(data)

  return (
    <div className='container border border-warning p-2'>
      <div className='bg-warning text-white rounded-circle'>
        <h2> Buscador de Canciones </h2>
      </div>
      {loading && <Loader />}
      <SongFom handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  )
}

export default SearchSongs
