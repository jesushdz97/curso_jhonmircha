import React, { useReducer } from 'react'
import {
  contadorReducer,
  contadorInitialState,
  contadorInit,
} from '../../reducers/contador.reducer'
import { TYPES } from '../../actions/contador.actions'

const ContadorMejorador = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit,
  )

  const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 })
  const dec = () => dispatch({ type: TYPES.DECREMENT, payload: 1 })
  const reset = () =>
    dispatch({ type: TYPES.RESET, payload: contadorInitialState })

  const add5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 })
  const dec5 = () => dispatch({ type: TYPES.DEC5, payload: 5 })

  return (
    <>
      <h4>Contador Mejorador Reducer</h4>
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

export default ContadorMejorador
