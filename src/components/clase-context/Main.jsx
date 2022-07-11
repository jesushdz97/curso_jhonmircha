import React from 'react'

const Main = ({ theme, texts, auth }) => {
  let { mainWelcome, mainHello, mainContent } = texts

  return (
    <main className={`text-center p-1 ${theme}`}>
      {auth ? <p>{mainWelcome}</p> : <p>{mainHello}</p>}
      <p>{mainContent}</p>
    </main>
  )
}

export default Main
