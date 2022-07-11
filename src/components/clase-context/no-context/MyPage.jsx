import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import translation from '../translations'

const MyPage = () => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('es')
  const [texts, setTexts] = useState(translation[language])
  const [auth, setAuth] = useState(null)

  const handleTheme = (e) => setTheme(e.target.value)

  const handleLanguage = (e) => {
    let { value } = e.target
    setLanguage(value)
    setTexts(translation[value])
  }

  const handleAuth = () => setAuth(!auth)

  return (
    <div className='border p-3'>
      <Header
        theme={theme}
        texts={texts}
        auth={auth}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        handleAuth={handleAuth}
      />
      <hr />
      <Main theme={theme} texts={texts} auth={auth} /> <hr />
      <Footer theme={theme} texts={texts} />
    </div>
  )
}

export default MyPage
