import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuConceptos from './MenuConceptos'
import Acerca from './pages/Acerca'
import Contactos from './pages/Contactos'
import { Error404 } from './pages/Error404'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Usuario from './pages/Usuario'

const Conceptos = () => {
  return (
    <div>
      <h2> Conceptos Basicos </h2>

      <Router>
        <MenuConceptos /> {/** Entra dentro del Router porque usa <Link> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contactos />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/usuario/:username/' element={<Usuario />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Conceptos
