import React from 'react'

const ContactInput = ({
  name,
  label,
  type,
  form,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className='form-floating m-2'>
      <input
        placeholder=' '
        type={type}
        name={name}
        id={name}
        value={form[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        className='form-control'
        required
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default ContactInput
