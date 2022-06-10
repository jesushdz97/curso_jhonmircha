import { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState()
  const [response, setResponse] = useState(null)

  const email = '3341db5361e9b33e1b79843395ae7a2f' // correo personal de gmail

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleBlur = (e) => {
    // handleChange(e)
    setErrors(validateForm(form))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(form))

    /** Comprobar si tenemos errores */
    if (Object.keys(errors).length === 0) {
      setLoading(true)
      helpHttp()
        .post(`https://formsubmit.co/ajax/${email}`, {
          headers: { 'Content-Type': 'application/json' },
          body: form,
        })
        .then((response) => {
          setLoading(false)
          setResponse(response.message)
        })
      setForm(initialForm)
      setTimeout(() => setResponse(null), 8000)
    } else {
      return
    }
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
