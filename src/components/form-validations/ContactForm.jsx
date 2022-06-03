import React from 'react'
import { useForm } from '../../hooks/useForm'
import ContactInput from './ContactInput'

const initialForm = {
  nombre: '',
  email: '',
  asunto: '',
  comentario: '',
}
const validationsForm = (form) => {
  let errors = {}
  return errors
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm)

  return (
    <>
      <div className='container bg-warning rounded-top form-header'>
        <h2 className='text-uppercase text-white py-2'>
          Formulario de Contacto
        </h2>
      </div>
      <div className='container border-start border-end border-bottom form-body p-1'>
        <form onSubmit={handleSubmit}>
          <ContactInput
            name='nombre'
            type='text'
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <ContactInput
            name='email'
            type='email'
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <ContactInput
            name='asunto'
            type='text'
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <div className='form-floating m-2'>
            <textarea
              name='comentario'
              cols='50'
              rows='5'
              className='form-control'
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor='comentario'>
              Comentarios
            </label>
          </div>
          <button className='mx-auto btn btn-warning text-white mb-2'>
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
