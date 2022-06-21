import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
  return (
    <nav className='nav'>
      <ol>
        <li>
          <span> No recomendado (HTML): </span>
          <a href='/'> Home </a>
          <a href='/contacto'> Contacto </a>
          <a href='/acerca'> Acerca </a>
        </li>
        <li>
          <span> Recomendado (Link): </span>
          <Link to='/'> Home </Link>
          <Link to='/contacto'> Contacto </Link>
          <Link to='/acerca'> Acerca </Link>
          <Link to='/404'> 404 </Link>
        </li>
        <li>
          <span> Componente NavLink: </span>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
          <NavLink to='/contacto' activeclassname='active'>
            Contacto
          </NavLink>
          <NavLink to='/acerca' activeclassname='active'>
            Acerca
          </NavLink>
          <NavLink to='/404' activeclassname='active'>
            404
          </NavLink>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptos
