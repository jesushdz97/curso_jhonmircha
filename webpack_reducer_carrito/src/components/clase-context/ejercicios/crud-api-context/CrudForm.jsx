import React, { useState, useEffect, useContext } from 'react'
import crudContext from '../../../../context/crudContext'

const initForm = { name: '', age: '' }

const CrudForm = () => {
  const [form, setForm] = useState(initForm)
  const { createData, updateData, setDataToEdit, dataToEdit } =
    useContext(crudContext)

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
    <div className='container border p-3 mt-2'>
      {!dataToEdit ? <h3>AGREGAR</h3> : <h3> EDITANDO...</h3>}
      {dataToEdit && <p> Editando: {dataToEdit.name} </p>}
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <input
              type='text'
              name='name'
              placeholder='Nombre'
              value={form.name}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='col'>
            <input
              type='number'
              name='age'
              placeholder='Edad'
              value={form.age}
              min={0}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='col'>
            <input
              type='submit'
              value={dataToEdit ? 'Editar' : 'Enviar'}
              className='btn btn-outline-dark btn-sm mx-1'
            />
            <input
              type='submit'
              value='Limpiar'
              onClick={handleReset}
              className='btn btn-outline-dark btn-sm mx-1'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CrudForm
