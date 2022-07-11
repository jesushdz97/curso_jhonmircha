import React, { useState } from 'react'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'
import FooterContext from './FooterContext'
import { ThemeProvider } from '../../../context/ThemeContext'
import { LanguageProvider } from '../../../context/LanguageContext'

const MyPage = () => {
  const [auth, setAuth] = useState(null)

  const handleAuth = () => setAuth(!auth)

  return (
    <div className='border p-3'>
      <ThemeProvider>
        <LanguageProvider>
          <HeaderContext auth={auth} handleAuth={handleAuth} />
          <hr />
          <MainContext auth={auth} /> <hr />
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyPage
