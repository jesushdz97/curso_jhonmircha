import React from 'react'
import './App.css'
import CrudApp from './components/crud/CrudApp'
import CrudApi from './components/crudApi/CrudApi'
import SearchSongs from './components/songs/SearchSongs'

const App = () => {
  return (
    <div className='App'>
      <h1> Ejericio con React </h1> <hr />
      <SearchSongs />
      <hr />
      <hr />
      <CrudApi /> <hr />
      <CrudApp /> <hr />
    </div>
  )
}

export default App
