import React, { memo } from 'react'

const CounterChild = () => {
  console.log('Hijo contador se renderiza')

  return (
    <div className='container border border-dark w-75 p-1'>
      <h5>Counter (Hijo)</h5>
    </div>
  )
}

export default memo(CounterChild)
