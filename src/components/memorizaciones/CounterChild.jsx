import React, { memo } from 'react'

const CounterChild = ({
  counter: dadCounter,
  add: dadAdd,
  subtract: dadSubtract,
}) => {
  console.log('Hijo contador se renderiza')

  return (
    <div className='container border border-dark w-75 p-1'>
      <h5>Counter (Hijo)</h5>
      <h6>{dadCounter}</h6>
      <nav>
        <button className='m-1' onClick={dadAdd}>
          +
        </button>
        <button className='m-1' onClick={dadSubtract}>
          -
        </button>
      </nav>
    </div>
  )
}

export default memo(CounterChild)
