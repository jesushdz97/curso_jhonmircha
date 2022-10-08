import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Productos = () => {
  /** Brinda iformacion acerca de la url donde te encuentras */
  // let location = useLocation()
  // console.log(location)
  /** http://localhost:3000/productos?inicio=1&fin=20 */

  /** Enfocado en los query params de una URL */
  let { search } = useLocation()
  let URLquery = new URLSearchParams(search) // Formatea tipo promesa los query params
  // console.log(URLquery)

  const LIMIT = 20 // Avance de registros de 20 en 20.
  let start = Number(URLquery.get('inicio')) || 1
  let end = Number(URLquery.get('fin')) || LIMIT
  //console.log(start, end)

  /** YA NO SE UNA UseHistory() - Solución alternativa */
  let navigate = useNavigate()
  // console.log(navigate)

  const handleNext = () => {
    if (start > 0) navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
    // navigate('?eff') // http://localhost:3000/productos?eff
    // navigate('/eff') // http://localhost:3000/eff
  }

  const handlePrev = () => {
    if (start > 1) navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)
  }

  return (
    <div>
      <h5> Productos </h5>
      <p>
        Mostrando productos del <b> {start /** 1 */} </b> al
        <b> {end /** 20 */} </b>
      </p>

      {end > LIMIT && (
        <button className='mx-1' onClick={handlePrev}>
          Atrás
        </button>
      )}

      <button onClick={handleNext}>Adelante</button>
    </div>
  )
}

export default Productos
