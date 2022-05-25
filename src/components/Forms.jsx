import React, { useState } from 'react'

const Forms = () => {
  const [name, setName] = useState('')
  const [sabor, setSabor] = useState('')
  const [language, setLanguage] = useState('')
  const [termino, setTermino] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Se ha enviado su formulario')
  }
  return (
    <>
      <h2>Formularios </h2>
      <form action=''>
        <div>
          <label htmlFor='name'> Nombre </label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '3rem' }}>
          <p>Elige tu sabor JS favorito</p>

          <input
            type='radio'
            name='sabor'
            id='vainilla'
            value='vainilla'
            onChange={(e) => setSabor(e.target.value)}
            defaultChecked
          />
          <label htmlFor='vainilla'> Vainilla </label>

          <input
            type='radio'
            name='sabor'
            id='react'
            value='react'
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor='react'> React </label>

          <input
            type='radio'
            name='sabor'
            id='angular'
            value='angular'
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor='angular'> Angular </label>

          <input
            type='radio'
            name='sabor'
            id='vue'
            value='vue'
            onChange={(e) => setSabor(e.target.value)}
          />
          <label htmlFor='vue'> Vue </label>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <p> Elige tu lenguaje de programación favorito </p>
          <select
            name='language'
            id=''
            onChange={(e) => setLanguage(e.target.value)}
            defaultValue='Jesus'>
            <option value='python'>Python</option>
            <option value='javascript'>Javascript</option>
            <option value='php'>PHP</option>
            <option value='ruby'>Ruby</option>
          </select>
          <br />
          <br />
          <label htmlFor='terminos'> Acepto terminos y condiciones </label>
            <input
              type='checkbox'
              name='terminos'
              id='terminos'
              onChange={(e) => setTermino(e.target.checked)}
            />
        </div>
        <button onClick={handleSubmit}> Enviar </button>
      </form>

      <hr />
    </>
  )
}

export default Forms
