import React, { useState } from 'react'

const SelectList = ({ name, id, label }) => {
  return (
    <div className='form-floating my-2'>
      <select name={name} id={id} className='form-select'>
        {/** OPTIONS */}
      </select>
      <label htmlFor={id}> {label} </label>
    </div>
  )
}

export default SelectList
