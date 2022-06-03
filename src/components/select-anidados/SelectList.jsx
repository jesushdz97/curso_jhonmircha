import React from 'react'
import Loader from '../crud-api/Loader'
import Message from '../crud-api/Message'
import { useFetch2 } from '../../hooks/useFetch2'

const SelectList = ({ name, id, url, handleChange }) => {
  /** SE RENDERIZA CADA VEZ QUE LA URL CAMBIA  */
  const { data, error, loading } = useFetch2(url)

  if (!data) return
  let label = name.charAt(0).toUpperCase() + name.slice(1)
  let options = data.response[name]

  return (
    <>
      {error && (
        <Message
          message={`[Error ${error.status}]: ${error.statusText}`}
          bgColor={'red'}
        />
      )}
      <div className='form-floating my-2'>
        <select
          name={name}
          id={id}
          onChange={handleChange}
          className='form-select'>
          <option value=''> Seleccionar {label} </option>
          {options.map((el, index) => (
            <option key={index} value={el}>
              {' '}
              {el}{' '}
            </option>
          ))}
        </select>
        <label htmlFor={id}> {label} </label>
      </div>
      {loading && <Loader />}
    </>
  )
}

export default SelectList
