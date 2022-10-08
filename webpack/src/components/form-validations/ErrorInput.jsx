import React from 'react'

const ErrorInput = ({ error }) => {
  return (
    <figcaption className='blockquote-footer text-start text-danger fw-bold ms-3 mt-1'>
      <small>{error}.</small>
    </figcaption>
  )
}

export default ErrorInput
