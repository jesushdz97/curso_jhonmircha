import React from 'react'

const Header = ({
  theme,
  texts,
  auth,
  handleTheme,
  handleLanguage,
  handleAuth,
}) => {
  let {
    headerTitle,
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
        <h3>{headerTitle}</h3>
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
          id='light'
          onClick={handleTheme}
          value='light'
        />
        <label className='form-check-label' htmlFor='light'>
          {headerLight}
        </label>
      </div>

      <div className='form-check m-1'>
        <input
          className='form-check-input'
          type='radio'
          name='theme'
          id='dark'
          onClick={handleTheme}
          value='dark'
        />
        <label className='form-check-label' htmlFor='dark'>
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

export default Header
