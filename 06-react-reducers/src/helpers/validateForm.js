const validateForm = (form) => {
  const errorsForm = {}
  const { name, age } = form

  const notNumbers = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const validateName = name.trim()
  const validateAge = age.trim()

  if (!validateName) {
    errorsForm.name = "El campo 'nombre' es requerido"
  } else if (!notNumbers.test(validateName)) {
    errorsForm.name = "El campo 'nombre' no acepta números y/o caracteres"
  } else if (validateName.length > 30) {
    errorsForm.name = "El campo 'nombre' tiene muchos caracteres"
  }

  if (!validateAge) {
    errorsForm.age = "El campo 'edad' es requerido"
  } else if (validateAge < 1 || validateAge > 99) {
    errorsForm.age = "El campo 'edad' es invalido"
  }

  return Object.keys(errorsForm).length ? errorsForm : null
}
export default validateForm
