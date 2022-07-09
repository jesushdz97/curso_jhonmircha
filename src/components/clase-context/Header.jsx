import React from 'react'

const Header = ({ theme, handleTheme }) => {
  return (
    <header className={`p-1 my-3 ${theme}`}>
      <section className='text-center'>
        <h3> Mí Aplicación sin ContextAPI</h3>
      </section>

      <div className='form-floating mb-2'>
        <select name='language' className='form-select' id='language'>
          <option value='es'>ES</option>
          <option value='en'>EN</option>
        </select>
        <label htmlFor='language' className='form-input'>
          Idiomas
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
          Claro
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
          Oscuro
        </label>
      </div>

      <div className='text-center m-1'>
        <button className='btn btn-small btn-outline-dark'>
          Iniciar Sesión
        </button>
      </div>
    </header>
  )
}

export default Header
