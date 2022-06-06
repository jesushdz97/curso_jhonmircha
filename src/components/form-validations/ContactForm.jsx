import React from 'react'
import { useForm } from '../../hooks/useForm'
import ContactInput from './ContactInput'
import ErrorInput from './ErrorInput'
import { validateForm } from './ValditeForm'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
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
  } = useForm(initialForm, validateForm)

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
            label='Nombre'
            name='name'
            type='text'
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          {errors.name && <ErrorInput error={errors.name} />}
          <ContactInput
            label='Email'
            name='email'
            type='email'
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          {errors.email && <ErrorInput error={errors.email} />}
          <ContactInput
            label='Asunto'
            name='subject'
            type='text'
            form={form}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          {errors.subject && <ErrorInput error={errors.subject} />}
          <div className='form-floating m-2'>
            <textarea
              name='comments'
              cols='50'
              rows='5'
              className='form-control'
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor='comments'>Comentarios</label>
          </div>
          {errors.comments && <ErrorInput error={errors.comments} />}
        
          <button
            className={`mx-auto btn btn-warning text-white mb-2 ${errors.keys() ? 'disabled' : ''}`}> {/* VER */}
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
