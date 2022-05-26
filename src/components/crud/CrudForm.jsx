import React, { useState } from 'react'

const initForm = { name: '', age: '' }

const CrudForm = ({ createData, updateData, setDataToEdit }) => {
  const [form, setForm] = useState(initForm)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((form.name || form.age).trim().length === 0) {alert('Datos Vacios'); return}
    !form.id ? createData(form) : updateData(form)
    handleReset()
  }

  const handleReset = () => {
    setForm(initForm)
    setDataToEdit(initForm)
  }

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nombre'
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type='number'
          name='age'
          placeholder='Edad'
          value={form.age}
          min={0}
          onChange={handleChange}
          required
        />
        <input type='submit' value='Enviar' />
        <input type='submit' value='Limpiar' onClick={handleReset} />
      </form>
    </div>
  )
}

export default CrudForm
