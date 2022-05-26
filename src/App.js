import React from 'react'
import './App.css'
import CrudApp from './components/crud/CrudApp'
import CrudApi from './components/crudApi/CrudApi'

const App = () => {
  return (
    <div className='App'>
      <h1> Ejericio con React </h1> <hr />
      <CrudApi /> <hr />
      <CrudApp /> <hr />
    </div>
  )
}

export default App
