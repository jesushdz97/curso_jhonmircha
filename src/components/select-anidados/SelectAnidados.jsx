import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectAnidados = () => {
  const [state, setState] = useState()
  const [town, setTown] = useState()
  const [suburb, setSuburb] = useState()

  return (
    <div className='container select-anidados'>
      <h2> Select Anidados </h2>
      <h3> México </h3>
      
      <SelectList
        label='Seleccionar Estado'
        handleChange={(e) => setState(e.target.value)}
      />

      {town && (
        <SelectList
          label='Seleccionar Municipio'
          handleChange={(e) => setTown(e.target.value)}
        />
      )}

      {suburb && (
        <SelectList
          label='Seleccionar Colonia'
          handleChange={(e) => setSuburb(e.target.value)}
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
