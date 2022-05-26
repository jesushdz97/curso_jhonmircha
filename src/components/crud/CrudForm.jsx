import React, { useState, useEffect } from 'react'

const initForm = { name: '', age: '' }

const CrudForm = ({ createData, updateData, setDataToEdit, dataToEdit }) => {
  const [form, setForm] = useState(initForm)

  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : setForm(initForm)
  }, [dataToEdit])

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
    if ((form.name || form.age).trim().length === 0) {
      alert('Datos Vacios')
      return
    }
    !form.id ? createData(form) : updateData(form)
    handleReset()
  }

  const handleReset = () => {
    setForm(initForm)
    setDataToEdit(null)
  }

  return (
    <div>
      {!dataToEdit ? <h3>Agregar</h3> : <h3> Editar</h3>}
      {dataToEdit && <p> Editando: {dataToEdit.name} </p>}
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
