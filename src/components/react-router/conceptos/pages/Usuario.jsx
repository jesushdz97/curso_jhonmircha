import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {
  let params = useParams()
  let { username, age } = useParams()
  console.log(params)
  return (
    <div>
      <h3>Perfil del Usuario </h3>
      <p>
        Nombre del usuario: <b> {username} </b>
      </p>
    </div>
  )
}

export default Usuario
