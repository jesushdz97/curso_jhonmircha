export function validateForm(form) {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/

  const { name, email, subject, comments } = form

  if (!name.trim()) {
    errors.name = "El campo 'nombre' es requerido"
  } else if (!regexName.test(name.trim())) {
    errors.name = "El campo 'nombre' no acepta simbolos"
  }

  if (!email.trim()) {
    errors.email = "El campo 'email' es requerido"
  } else if (!regexEmail.test(email.trim())) {
    errors.email = "El campo 'email' es invalido"
  }

  if (!subject.trim()) errors.subject = "El campo 'asunto' es requerido"

  if (!comments.trim()) {
    errors.comments = "El campo 'comentario' es requerido"
  } else if (!regexComments.test(comments)) {
    errors.comments = "El campo 'comentario' no debe tener mas de 255 caracteres"
  }

  return errors
}
