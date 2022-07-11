import React, { useState } from 'react'
import translation from '../translations'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'
import FooterContext from './FooterContext'
import { ThemeProvider } from '../../../context/ThemeContext'

const MyPage = () => {
  const [language, setLanguage] = useState('es')
  const [texts, setTexts] = useState(translation[language])
  const [auth, setAuth] = useState(null)

  const handleLanguage = (e) => {
    let { value } = e.target
    setLanguage(value)
    setTexts(translation[value])
  }

  const handleAuth = () => setAuth(!auth)

  return (
    <div className='border p-3'>
      <ThemeProvider>
        <HeaderContext
          texts={texts}
          auth={auth}
          handleLanguage={handleLanguage}
          handleAuth={handleAuth}
        />
        <hr />
        <MainContext texts={texts} auth={auth} /> <hr />
        <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  )
}

export default MyPage
