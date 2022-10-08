import React from 'react'
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
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
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from '../PrivateRoute'

const Conceptos = () => {
  return (
    <div>
      <h2> Hash Router </h2>
      <HashRouter>
        <MenuConceptos />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contactos />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/usuario/:username/' element={<Usuario />} />
          <Route path='/productos' element={<Productos />} />
          <Route
            path='/about'
            element={
              <>
                <Navigate to='/acerca' />
              </>
            }
          />
          {/** Redirección */}
          <Route
            path='/contact'
            element={
              <>
                <Navigate to='/contacto' />
              </>
            }
          />
          {/** Redirección */}

          {/** RUTAS ANIDADAS */}
          <Route path='/react' element={<ReactTopics />}>
            <Route path='' element={<SelTema />} />
            <Route path=':topic' element={<Topic />} />
            {/** ¿OUTLET? (DINAMICO) ''' /react/:topic ''' */}
          </Route>
          {/** RUTAS ANIDADAS */}

          {/** RUTAS PRIVADAS */}
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={<PrivateRoute element={<Dashboard />} />}
          />
          {/** RUTAS PRIVADAS */}

          <Route path='*' element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default Conceptos
