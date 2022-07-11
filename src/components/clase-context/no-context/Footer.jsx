import React from 'react'

const Footer = ({ theme, texts }) => {
  let { footerTitle } = texts

  return (
    <footer className={`text-end text-secondary fst-italic p-1 ${theme}`}>
      {footerTitle}
    </footer>
  )
}

export default Footer
