import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const MyPage = () => {
  const [theme, setTheme] = useState('dark')

  const handleTheme = (e) => setTheme(e.target.value)

  return (
    <div>
      <Header theme={theme} handleTheme={handleTheme} /> <hr />
      <Main theme={theme} /> <hr />
      <Footer theme={theme} />
    </div>
  )
}

export default MyPage
