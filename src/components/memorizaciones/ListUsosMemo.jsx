import React from 'react'

const ListUsos = () => {
  return (
    <>
      <p className='text-start'>
        <a
          href='https://es.reactjs.org/docs/react-api.html#reactmemo'
          target='_blank'
          rel='noreferrer'>
          React.memo
        </a>
      </p>
      <ul className='text-start'>
        <li> Se encarga de memorizar un componente. </li>
        <li>
          Lo que vuelve a memorizar al momento que sus <b>props</b> cambian.
        </li>
        <li> Evita re-renderizados.</li>
        <li>
          Hay que evitarlos a la medida de lo posible, pues podría ser más
          costosa la tarea de memorización que el re-renderizado del componente.
        </li>
        <li>Usalo cuando:</li>
        <ul className='fst-italic'>
          <li>Tenemos muchos elementos renderizados en una lista </li>
          <li>LLamamos datos de APIs</li>
          <li>Un componente se vuelve muy pesado</li>
          <li>Salen alerta de rendimiento en consola</li>
        </ul>
      </ul>
      <br />
      <br />
    </>
  )
}

export default ListUsos
