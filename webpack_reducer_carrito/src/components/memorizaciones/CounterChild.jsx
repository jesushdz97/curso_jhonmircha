import React, { memo, useMemo } from 'react'

const CounterChild = ({
  counter: dadCounter,
  add: dadAdd,
  subtract: dadSubtract,
}) => {
  /** ESTRUCTURA REALENTIZANTE */
  /* let superNum = 0

  // for (let i = 0; i < 1000000000; i++) {
  //   superNum++
  // } */

  const superNum = useMemo(() => {
    let superNum = 0
    for (let i = 0; i < 1000000000; i++) {
      superNum++
    }
    return superNum
  }, [])

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
      <h6>SuperNum: {superNum}</h6>
    </div>
  )
}

export default memo(CounterChild)

/**
 * usaCallback() -> Memoriza una función.
 * useMemo() -> Memoriza el resultado de una función (necesita return).
 *
 * Se habla mucho de << Computed Property >>
 */ 
