import React from 'react'
import Contador from './components/reducer/Contador'
import ContadorMejorador from './components/reducer/ContadorMejorado'

const App = () => {
  return (
    <div className='container-fluid'>
      <h1 className='text-center'> useReducer </h1> <hr />
      <ContadorMejorador /> <hr />
      <Contador /> <hr />
    </div>
  )
}

export default App
