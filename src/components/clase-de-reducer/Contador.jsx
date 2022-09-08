import React, { useReducer } from 'react'

const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  INC5: 'INC5',
  DEC5: 'DEC5',
}

const initialState = { count: 0 }

const init = (initialState) => {
  return { count: initialState.count + 1997 }
}

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
      return initialState
    default:
      return state
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init)

  const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 })
  const dec = () => dispatch({ type: TYPES.DECREMENT, payload: 1 })
  const reset = () => dispatch({ type: TYPES.RESET, payload: initialState })

  const add5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 })
  const dec5 = () => dispatch({ type: TYPES.DEC5, payload: 5 })

  return (
    <>
      <h4>Contador</h4>
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

      <div className='container text-center'>
        <h3> {state.count} </h3>
      </div>
    </>
  )
}

export default Contador
