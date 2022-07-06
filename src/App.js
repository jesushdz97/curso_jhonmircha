import React from 'react'
import './App.css'
import CrudApiRutas from './components/react-router/ejercicios/crud-api-rutas/CrudApiRutas'
import Conceptos from './components/react-router/conceptos/Conceptos'
import SearchSongs from './components/songs/SearchSongs'
import SongSearchRutas from './components/react-router/ejercicios/songs-rutas/SongSearchRutas'

const App = () => {
  return (
    <div className='container'>
      <h1> React Router </h1>
      <a
        href='https://reactrouter.com/web/guides/quick-start'
        target={'_blank'}
        rel='noreferrer'>
        Documentación
      </a>
      <hr />
      {/* <CrudApiRutas /> */}
      <SongSearchRutas /> <hr />
      {/* <Conceptos /> */}
    </div>
  )
}

export default App
