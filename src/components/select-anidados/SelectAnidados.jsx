import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectAnidados = () => {
  const [state, setState] = useState()
  const [town, setTown] = useState()
  const [suburb, setSuburb] = useState()

  let token = 'd81a7ac7-976d-4e1e-b7d3-b1979d791b6c'

  return (
    <div className='container select-anidados'>
      <h2> Select Anidados </h2>
      <h3> México </h3>

      <SelectList
        label='Seleccionar Estado'
        handleChange={(e) => setState(e.target.value)}
        name='estado'
        url={`https://api.copomex.com/query/get_estados?token=${token}`}
      />

      {town && (
        <SelectList
          label='Seleccionar Municipio'
          handleChange={(e) => setTown(e.target.value)}
          name='municipios'
        />
      )}

      {suburb && (
        <SelectList
          label='Seleccionar Colonia'
          handleChange={(e) => setSuburb(e.target.value)}
          name='colonia'
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  )
}

export default SelectAnidados
