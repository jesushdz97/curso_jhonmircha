import React from 'react'
import Memo from './components/memorizaciones/Memo'
import './App.css'
import MyPage from './components/clase-context/MyPage'

const App = () => {
  return (
    <div className='container text-center border-top border-start border-end p-2'>
      <section>
        <h1> React Context API </h1>
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

      <MyPage />
    </div>
  )
}

export default App
