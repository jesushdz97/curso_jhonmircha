import { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const handleTheme = (e) => setTheme(e.target.value)
  const data = { theme, handleTheme }
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext

/**
 * El contexto por dentro tiene un 'provider'
 * y un 'consumer'.
 *
 * Se consumirá la dara mediante el hook, useContext().
 *
 */
