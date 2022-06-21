import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import Acerca from './pages/Acerca'
import Contactos from './pages/Contactos'
import { Error404 } from './pages/Error404'
import Home from './pages/Home'

const Conceptos = () => {
  return (
    <div>
      <h2> Conceptos Basicos </h2>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contactos />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Conceptos
