import React, { useState } from 'react'
import CounterChild from './CounterChild'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const add = () => setCounter(counter + 1)
  const subtract = () => setCounter(counter - 1)

  return (
    <div className='container p-2'>
      <h5>Contador (Padre) </h5>
      <nav>
        <button className='m-1' onClick={add}>
          +
        </button>
        <button className='m-1' onClick={subtract}>
          -
        </button>
      </nav>
      <h3> {counter} </h3>
      <CounterChild />
    </div>
  )
}

export default Counter
