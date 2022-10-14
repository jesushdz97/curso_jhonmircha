const Alert = ({ serverError }) => {
  let error = serverError.message

  if (serverError.status) {
    const { message, status } = serverError
    error = `${status} | ${message}`
  }

  return (
    <div className='alert alert-danger' role='alert'>
      {error}
    </div>
  )
}
export default Alert
