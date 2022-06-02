import React, { useState } from 'react'
import Loader from '../crud-api/Loader'
import Message from '../crud-api/Message'
import { useFetch2 } from '../../hooks/useFetch2'

const SelectList = ({ name, id, label, url, handleChange }) => {
  const { data, error, loading } = useFetch2(url)

  return (
    <>
    <Message message={JSON.stringify(error)} bgColor={'red'} />
      <div className='form-floating my-2'>
        <select name={name} id={id} onChange={handleChange} className='form-select'>
          {/** OPTIONS */}
        </select>
        <label htmlFor={id}> {label} </label>
      </div>
      {loading && <Loader />}
    </>
  )
}

export default SelectList
