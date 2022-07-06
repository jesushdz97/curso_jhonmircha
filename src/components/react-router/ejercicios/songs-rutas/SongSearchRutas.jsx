import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate, Link } from 'react-router-dom'
import { helpHttp } from '../../../../helpers/helpHttp'
import { Error404 } from '../../conceptos/pages/Error404'
import Loader from '../../../crud-api/Loader'
import SongDetailsRutas from './SongDetailsRutas'
import SongFormRutas from './SongFormRutas'

const SongSearchRutas = () => {
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
      <HashRouter>
        <header className='mb-2'>
          <div className='bg-warning text-white rounded-circle mb-2 p-1'>
            <h2 className='text-center'> Buscador de Canciones </h2>
          </div>
          <nav className='text-center'>
            <Link to='/'> Home </Link>
          </nav>
        </header>
        {loading && <Loader />}
        <Routes>
          <Route index element={<Navigate to={'canciones'} />} />
          <Route path='canciones'>
            <Route
              index
              element={
                <>
                  <SongFormRutas handleSearch={handleSearch} />
                  <h2 className='text-center'> TABLA DE CANCIONES </h2>
                  {search && !loading && (
                    <SongDetailsRutas search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />

            <Route
              path=':id'
              element={
                <>
                  <h2> PAGINA DE CANCION </h2>
                </>
              }
            />

            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default SongSearchRutas
