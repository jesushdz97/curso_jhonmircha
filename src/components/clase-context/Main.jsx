import React from 'react'

const Main = ({ theme, texts }) => {
  let { mainWelcome, mainHello, mainContent } = texts

  return (
    <main className={`text-center p-1 ${theme}`}>
      <p>{mainWelcome}</p>
      <p>{mainHello}</p>
      <p>{mainContent}</p>
    </main>
  )
}

export default Main
