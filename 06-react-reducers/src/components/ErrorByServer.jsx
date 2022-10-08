const ErrorByServer = ({ message }) => {
  return (
    <div className='container'>
      <div className='alert alert-danger' role='alert'>
        <h6 className='text-center'> {message} </h6>
      </div>
    </div>
  )
}

export default ErrorByServer
