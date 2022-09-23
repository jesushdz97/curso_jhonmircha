import React from 'react'
import Memo from './components/memorizaciones/Memo'
import './App.css'

const App = () => {
  return (
    <div className='container text-center border-top border-start border-end p-2'>
      <h1 className='text-center text-uppercase'>Memorización en React</h1>
      <hr />
      <Memo />
    </div>
  )
}

export default App
