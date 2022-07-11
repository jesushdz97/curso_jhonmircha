import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'

const FooterContext = ({ texts }) => {
  let { footerTitle } = texts
  const { theme } = useContext(ThemeContext)

  return (
    <footer className={`text-center text-secondary fst-italic p-1 ${theme}`}>
      {footerTitle}
    </footer>
  )
}

export default FooterContext
