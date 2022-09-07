import React, { useReducer } from 'react'

const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  INC5: 'INC5',
  DEC5: 'DEC5',
}

const initState = { count: 0 }

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPES.INCREMENT:
      return { count: state.count + payload }
    case TYPES.DECREMENT:
      return { count: state.count - payload }
    case TYPES.INC5:
      return { count: state.count + payload }
    case TYPES.DEC5:
      return { count: state.count - payload }
    case TYPES.RESET:
      return initState
    default:
      return state
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 })
  const dec = () => dispatch({ type: TYPES.DECREMENT, payload: 1 })
  const reset = () => dispatch({ type: TYPES.RESET, payload: initState })

  const add5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 })
  const dec5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 })

  return (
    <>
      <nav className='d-flex justify-content-center py-3'>
        <button className='btn btn-primary mx-1 px-5' onClick={add}>
          +
        </button>

        <button className='btn btn-secondary mx-1 px-5' onClick={add5}>
          +5
        </button>

        <button className='btn btn-success mx-1 px-5' onClick={reset}>
          0
        </button>

        <button className='btn btn-warning mx-1 px-5' onClick={dec}>
          -
        </button>

        <button className='btn btn-danger mx-1 px-5' onClick={dec5}>
          -5
        </button>
      </nav>
      <hr />

      <div className='container text-center'>
        <h3> {state.count} </h3>
      </div>
    </>
  )
}

export default Contador
