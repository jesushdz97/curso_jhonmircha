import React from 'react'
import './App.css'
import CrudApi from './components/crud-api/CrudApi'
import Conceptos from './components/react-router/conceptos/Conceptos'
import SearchSongs from './components/songs/SearchSongs'

const App = () => {
  return (
    <div className='container'>
      <h1> React Router </h1>
      <a
        href='https://reactrouter.com/web/guides/quick-start'
        target={'_blank'}
        rel='noreferrer'>
        Documentación
      </a>{' '}
      <hr />
      <CrudApi /> <hr />
      <SearchSongs /> <hr />
      <Conceptos />
    </div>
  )
}

export default App
