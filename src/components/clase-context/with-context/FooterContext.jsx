import React, { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import ThemeContext from '../../../context/ThemeContext'

const FooterContext = () => {
  const { theme } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)

  let { footerTitle } = texts

  return (
    <footer className={`text-center text-secondary fst-italic p-1 ${theme}`}>
      {footerTitle}
    </footer>
  )
}

export default FooterContext
