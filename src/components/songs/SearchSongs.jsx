import React, { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import Loader from '../crudApi/Loader'
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
      let hola = 'https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime'

      setLoading(true)

      const resArtist = await helpHttp().get(urlArtist)
      const resSong = await helpHttp().get(hola)

      console.log(resArtist)
      console.log(resSong)

      // const res = Promise.all([helpHttp().get(urlArtist), helpHttp().get(urlSong)])
      // res.then((res) => console.log(res))
      setLoading(false)
    }
    fetchData()
  }, [search])

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
