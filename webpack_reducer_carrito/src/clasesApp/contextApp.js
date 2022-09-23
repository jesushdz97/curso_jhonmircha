import React from 'react'
import './App.css'
import MyPage from './components/clase-context/no-context/MyPage'
import MyPageContext from './components/clase-context/with-context/MyPageContext'
import CrudApi from './components/clase-context/ejercicios/crud-api-context/CrudApi'
import { CrudContextProvider } from './context/crudContext'

const App = () => {
  return (
    <div className='container border p-2'>
      <section className='text-center'>
        <h1> React ContextAPI </h1>
        <hr />
        <p>
          <a
            href='https://es.reactjs.org/docs/context.html'
            target='_blank'
            rel='noreferrer'
            className='fst-italic'>
            Documentación
          </a>
        </p>
      </section>

      <CrudContextProvider>
        <CrudApi />
      </CrudContextProvider>
      <hr />

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <MyPageContext />
          </div>
          <div className='col'>
            <MyPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
