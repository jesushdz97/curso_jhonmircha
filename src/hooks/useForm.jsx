import { useState } from 'react'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState()
  const [response, setResponse] = useState(null)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value.trim(),
    })
  }

  const handleBlur = (e) => {}
  const handleSubmit = (e) => {}

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
