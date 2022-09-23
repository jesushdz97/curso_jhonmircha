import React, { useState } from 'react'
import SongInputRutas from './SongInputRutas'

const initialForm = { artist: '', song: '' }

/**
 * Esta función podría ser un helper
 * @param {*} obj
 */
const trimObj = (obj) => {
  for (const key in obj) {
    obj[key] = obj[key].trim()
  }
}

const SongFormRutas = ({ handleSearch, handleSaveSong, setIsDisabled, isDisabled }) => {
  const [form, setForm] = useState(initialForm)
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    trimObj(form)

    if ((form.artist || form.song).trim().length === 0) {
      alert('algun campo está vacio')
      setIsDisabled(true)
      return
    }

    handleSearch(form)
    setForm(initialForm)
    setIsDisabled(false)
  }

  const handleReset = () => setForm(initialForm)

  return (
    <div className='border border-warning text-center p-2'>
      <h5 className='border-bottom border-warning pb-2'>
        Formulario de Canciones
      </h5>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col'>
              <SongInputRutas
                label='Artista'
                name='artist'
                value={form.artist}
                handleChange={handleChange}
              />
            </div>
            <div className='col'>
              <SongInputRutas
                label='Canción'
                name='song'
                value={form.song}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button className='btn btn-warning w-25 mt-2 mx-1'>Enviar</button>
            <button
              className='btn btn-warning mt-2 w-25 mx-1'
              onClick={handleReset}>
              Limpiar
            </button>

            <input
              type='submit'
              value='Agregar Canción'
              onClick={handleSaveSong}
              className='btn btn-primary mt-2 mx-1'
              disabled={isDisabled}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SongFormRutas
