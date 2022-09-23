import { createContext, useState } from 'react'
import translation from '../components/clase-context/translations'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')
  const [texts, setTexts] = useState(translation[language])

  const handleLanguage = (e) => {
    let { value } = e.target
    setLanguage(value)
    setTexts(translation[value])
  }

  const data = {
    texts,
    handleLanguage,
  }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export { LanguageProvider }
export default LanguageContext
