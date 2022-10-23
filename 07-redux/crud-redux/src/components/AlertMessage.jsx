import { Alert } from 'react-bootstrap'

const AlertMessage = ({ serverError }) => {
  let error = serverError.message

  if (serverError.status) {
    const { message, status } = serverError
    error = `${status} | ${message}`
  }

  return (
    <Alert role={'alert'} variant='danger'>
      {error}
    </Alert>
  )
}

export default AlertMessage
