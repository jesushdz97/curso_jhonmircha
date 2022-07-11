import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import LanguageContext from '../../../context/LanguageContext'

const HeaderContext = ({ auth, handleAuth }) => {
  const { theme, handleTheme } = useContext(ThemeContext)
  const { texts, handleLanguage } = useContext(LanguageContext)

  let {
    headerTitleContext,
    headerSubtitle,
    selectLabel,
    headerLight,
    headerDark,
    buttonLogin,
    buttonLogout,
  } = texts

  return (
    <header className={`p-1 my-3 ${theme}`}>
      <section className='text-center'>
        <h3>{headerTitleContext}</h3>
        <h4>{headerSubtitle}</h4>
      </section>

      <div className='form-floating mb-2'>
        <select
          name='language'
          className='form-select'
          id='language'
          onChange={handleLanguage}>
          <option value='es'>ES</option>
          <option value='en'>EN</option>
        </select>
        <label htmlFor='language' className='form-input'>
          {selectLabel}
        </label>
      </div>

      <div className='form-check m-1'>
        <input
          className='form-check-input'
          type='radio'
          name='theme'
          id='light-context'
          value='light'
          onClick={handleTheme}
        />
        <label className='form-check-label' htmlFor='light-context'>
          {headerLight}
        </label>
      </div>

      <div className='form-check m-1'>
        <input
          className='form-check-input'
          type='radio'
          name='theme'
          id='dark-context'
          value='dark'
          onClick={handleTheme}
        />
        <label className='form-check-label' htmlFor='dark-context'>
          {headerDark}
        </label>
      </div>

      <div className='text-center m-1'>
        <button className='btn btn-small btn-outline-dark' onClick={handleAuth}>
          {auth ? buttonLogin : buttonLogout}
        </button>
      </div>
    </header>
  )
}

export default HeaderContext
