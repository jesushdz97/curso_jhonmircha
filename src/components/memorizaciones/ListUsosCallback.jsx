import React from 'react'

const ListUsosCallback = () => {
  return (
    <>
      <p className='text-start'>
        <a
          href='https://es.reactjs.org/docs/react-api.html#usecallback'
          target='_blank'
          rel='noreferrer'>
          useCallback()
        </a>
      </p>
      <ul className='text-start'>
        <li>
          Memoriza una función, para no volverla a definir en cada render.{' '}
        </li>
        <li>
          Úsalo siempre que se pase una función como <b>props</b> a un
          compenente memorizado.
        </li>
        <li>
          Úsalo siempre que se pase una función como parámetro de un efecto.
        </li>
      </ul>
      <br />
      <br />
    </>
  )
}

export default ListUsosCallback
