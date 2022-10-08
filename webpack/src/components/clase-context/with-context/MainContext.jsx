import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import LanguageContext from '../../../context/LanguageContext'
import ThemeContext from '../../../context/ThemeContext'

const MainContext = () => {
  const { texts } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const { auth } = useContext(AuthContext)

  let { mainWelcome, mainHello, mainContent } = texts

  return (
    <main className={`text-center p-1 ${theme}`}>
      {auth ? <p>{mainWelcome}</p> : <p>{mainHello}</p>}
      <p>{mainContent}</p>
    </main>
  )
}

export default MainContext
