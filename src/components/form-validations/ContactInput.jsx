import React from 'react'
import { capitalize } from '../../helpers/capitalize'

const ContactInput = ({ name, type, form, handleChange, handleBlur }) => {
  let label = capitalize(name)

  return (
    <div className='form-floating m-2'>
      <input
        placeholder=' '
        type={type}
        name={name}
        id={name}
        value={form.name}
        onBlur={handleBlur}
        onChange={handleChange}
        className='form-control'
        required
      />
      <label htmlFor='name'>{label}</label>
    </div>
  )
}

export default ContactInput
