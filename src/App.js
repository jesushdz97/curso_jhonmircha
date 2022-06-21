import React from 'react'
import './App.css'
import Conceptos from './components/react-router/conceptos/Conceptos'

const App = () => {
  return (
    <div className='container'>
      <h1> React Router </h1>
      <a
        href='https://reactrouter.com/web/guides/quick-start'
        target={'_blank'}
        rel='noreferrer'>
        Documentación
      </a> <hr />
      <Conceptos />
    </div>
  )
}

export default App
