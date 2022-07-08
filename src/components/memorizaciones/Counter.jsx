import React, { useState, useCallback } from 'react'
import CounterChild from './CounterChild'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  /** FUNCIONES MEMORIZADAS */
  const add = useCallback(() => setCounter(counter + 1), [counter])
  const subtract = useCallback(() => setCounter(counter - 1), [counter])

  /** FUNCION NO MEMORIZADAS */
  // const add = () => setCounter(counter + 1)
  // const subtract = () => setCounter(counter - 1)
  const handleInput = (e) => setInput(e.target.value)

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

      <div className='input-group mx-auto mb-3 w-75'>
        <span className='input-group-text'>INPUT</span>
        <input
          type='text'
          name=''
          onChange={handleInput}
          value={input}
          className='form-control'
        />
      </div>

      <CounterChild counter={counter} add={add} subtract={subtract} />
    </div>
  )
}

export default Counter

/** NOTAS REACT: useCallback() */
/**
 * Al pasar funciones al componente hijo del <Counter />, estas
 * no se memorizan. Por lo tanto, generan renderizados del hijo
 * cada vez que esta se ejecutan.
 *
 * React.memo(<Component />), memoriza el componente, mas no sus
 * funciones pasadas como props.
 *
 * Despues de ejecutar la función del handleInput ya no re-renderiza
 * al hijo. Debido a que en el re-renderizado del padre, las funciones
 * add() y subtract() ya están memorizadas. Es decir, no se tienen que
 * volver a cargar, lo que daba como efecto el re-renderizado del hijo,
 * el cual tiene a las funciones de su padre como props.
 */
