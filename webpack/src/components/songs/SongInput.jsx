import React from 'react'

const SongInput = ({ name, label, value, handleChange }) => {
  return (
    <>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <input
        type='text'
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-control'
        required
      />
    </>
  )
}

export default SongInput
