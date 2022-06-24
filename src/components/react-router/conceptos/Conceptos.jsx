import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import MenuConceptos from './MenuConceptos'
import Acerca from './pages/Acerca'
import Contactos from './pages/Contactos'
import { Error404 } from './pages/Error404'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ReactTopics from './pages/ReactTopics'
import SelTema from './pages/SelTema'
import Topic from './pages/Topic'
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
          <Route path='/about' element={<><Navigate to='/acerca' /></>} /> {/** Redirección */}
          <Route path='/contact' element={<><Navigate to='/contacto' /></>} /> {/** Redirección */}
          <Route path='/react' element={<ReactTopics />}> {/** RUTAS ANIDADAS */}
            <Route path='' element={<SelTema />}  />            
            <Route path=':topic' element={<Topic />} /> {/** ¿OUTLET? (DINAMICO) ''' /react/:topic ''' */}           
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Conceptos
