import { useState } from 'react'
import validateForm from '../helpers/validateForm'

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm)
  const [formErrors, setFormErrors] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    // setFormErrors(validateForm(form))
  }

  const handleBlur = () => setFormErrors(validateForm(form))

  const resetForm = () => setForm(initialForm)

  return { handleChange, formErrors, form, setForm, handleBlur, resetForm }
}

export default useForm
