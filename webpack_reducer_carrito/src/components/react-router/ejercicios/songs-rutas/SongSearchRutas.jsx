import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate, Link } from 'react-router-dom'
import { helpHttp } from '../../../../helpers/helpHttp'
import { Error404 } from '../../conceptos/pages/Error404'
import Loader from '../../../crud-api/Loader'
import SongDetailsRutas from './SongDetailsRutas'
import SongFormRutas from './SongFormRutas'
import SongTable from './SongTable'
import SongPageRutas from './SongPageRutas'

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || []

const SongSearchRutas = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(null)
  const [mySongs, setMySongs] = useState(mySongsInit)
  const [isDisabled, setIsDisabled] = useState(true) // AGREGAR CANCION

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
    localStorage.setItem('mySongs', JSON.stringify(mySongs))
  }, [search, mySongs])

  const handleSearch = (data) => setSearch(data)

  /** GUARDAR CANCIÓN */
  const handleSaveSong = () => {
    let currentSong = { search, bio, lyric }
    let songs = [...mySongs, currentSong]
    localStorage.setItem('mySongs', JSON.stringify(songs))
    setMySongs(songs)
    setSearch(null)
    setIsDisabled(true)
  }

  /** ELIMINAR CANCIÓN */
  const handleDeleteSong = (id) => {
    let isDelete = window.confirm(`DESEA ELIMINAR LA CANCION CON ID: ${id}`)
    let songs = mySongs.filter((el, index) => index !== id)

    if (isDelete) {
      setMySongs(songs)
      localStorage.setItem('mySongs', JSON.stringify(songs))
    }
  }

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
          <Route index element={<Navigate to='canciones' />} />

          <Route path='canciones'>
            <Route
              index
              element={
                <>
                  <SongFormRutas
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetailsRutas search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />

            <Route path=':id' element={<SongPageRutas mySongs={mySongs} />} />

            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default SongSearchRutas
