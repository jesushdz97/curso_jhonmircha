import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'

const MainContext = ({ texts, auth }) => {
  let { mainWelcome, mainHello, mainContent } = texts

  const { theme } = useContext(ThemeContext)

  return (
    <main className={`text-center p-1 ${theme}`}>
      {auth ? <p>{mainWelcome}</p> : <p>{mainHello}</p>}
      <p>{mainContent}</p>
    </main>
  )
}

export default MainContext
