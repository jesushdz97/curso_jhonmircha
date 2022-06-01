import React from 'react'
import './App.css'
import CrudApp from './components/crud/CrudApp'
import CrudApi from './components/crud-api/CrudApi'
import SelectAnidados from './components/select-anidados/SelectAnidados'
import SearchSongs from './components/songs/SearchSongs'

const App = () => {
  return (
    <div className='App'>
      <h1> Ejericio con React </h1> <hr />
      <SelectAnidados />
      <hr />
      <hr />
      <SearchSongs />
      <hr />
      <hr />
      <CrudApi /> <hr />
      <CrudApp /> <hr />
    </div>
  )
}

export default App
