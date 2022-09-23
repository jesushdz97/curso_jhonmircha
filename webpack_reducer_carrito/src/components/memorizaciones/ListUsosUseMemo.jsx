import React from 'react'

const ListUsosUseMemo = () => {
  return (
    <>
      <p className='text-start'>
        <a
          href='https://es.reactjs.org/docs/react-api.html#usememo'
          target='_blank'
          rel='noreferrer'>
          useMemo()
        </a>
      </p>
      <ul className='text-start'>
        <li>
          Memoriza el valor calculado, es decir, el resultado de una función.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo en procesos pesados.</li>
      </ul>
      <br />
    </>
  )
}

export default ListUsosUseMemo
