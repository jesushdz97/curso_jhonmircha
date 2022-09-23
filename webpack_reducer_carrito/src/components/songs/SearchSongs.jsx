import React, { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import Loader from '../crud-api/Loader'
import SongDetails from './SongDetails'
import SongFom from './SongFom'

const SearchSongs = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleSearch = (data) => setSearch(data)

  useEffect(() => {
    if (search === null) return

    const fetchData = async () => {
      const { artist, song } = search

      let urlArtist = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      let urlSong = `https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)

      const [resArtist, resSong] = await Promise.all([
        helpHttp().get(urlArtist),
        helpHttp().get(urlSong),
      ])

      setBio(resArtist)
      setLyric(resSong)
      setLoading(false)
    }
    fetchData()
  }, [search])

  return (
    <div className='container border border-warning p-2'>
      <div className='bg-warning text-white rounded-circle p-1'>
        <h2 className='text-center'> Buscador de Canciones </h2>
      </div>
      {loading && <Loader />}
      <SongFom handleSearch={handleSearch} />
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  )
}

export default SearchSongs
