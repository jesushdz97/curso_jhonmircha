import { useState } from 'react'

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const e = event.target
    setForm({
      ...form,
      [e.name]: e.value,
    })
  }

  const resetForm = () => setForm(initialForm)

  return { form, resetForm, handleChange }
}

export default useForm
