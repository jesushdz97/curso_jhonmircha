import { useEffect } from 'react'
import { useApiContext } from '../../context'
import useForm from '../../hooks/useForm'
import { useServices } from '../../services'
import ErrorFormMessage from './ErrorFormMessage'

const initState = { name: '', age: '' }

const CrudApiForm = () => {
  const { createData, updateData } = useServices()
  const { dataToEdit, setDataToEdit } = useApiContext()
  const { form, handleChange, formErrors, handleBlur, resetForm, setForm } =
    useForm(initState)

  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : resetForm()
  }, [dataToEdit])

  const handleSubmit = async (e) => {
    e.preventDefault()
    dataToEdit ? updateData(form) : createData(form)
    setDataToEdit(null)
    resetForm()
  }

  const cantSubmit = formErrors || form === initState
  const buttonText = dataToEdit ? 'Editar' : 'Agregar'

  return (
    <div className='container py-3 mb-3'>
      <form onSubmit={handleSubmit}>
        <div className='row justify-content-md-center'>
          <div className='col-sm-12 col-md-5 mb-3'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              placeholder='Nombre'
            />
            {formErrors?.name && <ErrorFormMessage message={formErrors.name} />}
          </div>

          <div className='col-sm-12 col-md-5 mb-3'>
            <input
              type='text'
              name='age'
              value={form.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              placeholder='Edad'
            />
            {formErrors?.age && <ErrorFormMessage message={formErrors.age} />}
          </div>

          <div className='col-sm-12 col-md-1'>
            <button className={`btn btn-primary ${cantSubmit && 'disabled'}`}>
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default CrudApiForm
