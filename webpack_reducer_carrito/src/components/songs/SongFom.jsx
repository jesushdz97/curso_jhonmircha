import React, { useState } from 'react'
import SongInput from './SongInput'

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

const SongFom = ({ handleSearch }) => {
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
      return
    }

    handleSearch(form)
    handleReset()
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
              <SongInput
                label='Artista'
                name='artist'
                value={form.artist}
                handleChange={handleChange}
              />
            </div>
            <div className='col'>
              <SongInput
                label='Canción'
                name='song'
                value={form.song}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button className='btn btn-warning mt-2 w-25 mx-1'>Enviar</button>
            <button
              className='btn btn-warning mt-2 w-25 mx-1'
              onClick={handleReset}>
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SongFom
