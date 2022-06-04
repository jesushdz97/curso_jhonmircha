import { useState } from 'react'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState()
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value.trim(),
    })
  }

  const handleBlur = (e) => {
    // handleChange(e)
    setErrors(validateForm(form))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
