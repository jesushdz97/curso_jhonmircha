import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ReactTopics = () => {
  return (
    <div>
      <h3> Temas de React </h3>
      <ul>
        <li>
          <NavLink to={`jsx`} activeclassname='active'>JSX</NavLink>
        </li>
        <li>
          <NavLink to={`props`} activeclassname='active'>PROPS</NavLink>
        </li>
        <li>
          <NavLink to={`estados`} activeclassname='active'>ESTADO</NavLink>
        </li>
        <li>
          <NavLink to={`componentes`} activeclassname='active'>COMPONENTES</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

export default ReactTopics

/**
 * Los NavLink nos redirijen a cada de los topic.
 * Es es una subruta, y su ruta principal es: '/react' (ver <Conceptos.jsx>)
 *
 */
