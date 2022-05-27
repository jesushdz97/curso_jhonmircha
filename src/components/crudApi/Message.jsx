import React from 'react'

const Message = ({ message, bgColor }) => {
  const styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'text-center',
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: bgColor,
  }
  return (
    <div style={styles}>
      <p>{message}</p>
    </div>
  )
}

export default Message
