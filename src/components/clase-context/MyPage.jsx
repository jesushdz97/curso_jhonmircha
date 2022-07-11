import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import translation from './translations'

const MyPage = () => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('es')
  const [texts, setTexts] = useState(translation[language])

  const handleTheme = (e) => setTheme(e.target.value)

  const handleLanguage = (e) => {
    let { value } = e.target
    setLanguage(value)
    setTexts(translation[value])
  }

  return (
    <div>
      <Header
        theme={theme}
        texts={texts}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
      />
      <hr />
      <Main theme={theme} texts={texts} /> <hr />
      <Footer theme={theme} texts={texts} />
    </div>
  )
}

export default MyPage
