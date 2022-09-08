import React from 'react'

const Message = ({ message, bgColor }) => {
  const styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'text-center',
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: bgColor,
    minHeight: '6rem',
  }
  return (
    <div
      className='d-flex align-items-center justify-content-center m-2 rounded'
      style={styles}>
      <p>{message}</p>
    </div>
  )
}

export default Message
