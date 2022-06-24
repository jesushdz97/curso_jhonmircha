import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
  return (
    <>
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
          <li>
            <span> Parametros: </span>
            <Link to='usuario/jonmircha'> Jon Mircha </Link>
            <Link to='usuario/jesus'> Jesus </Link>
          </li>
          <li>
            <span>Parametros de consulta: </span>
            <Link to='/productos'> Productos </Link>
          </li>
          <li>
            <span>Redirecciones: </span>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
          </li>
          <li>
            <span>Rutas anidadas: </span>
            <NavLink to='/react' activeclassname='active'> React </NavLink>
          </li>
        </ol>
      </nav>
      <hr />
    </>
  )
}

export default MenuConceptos
