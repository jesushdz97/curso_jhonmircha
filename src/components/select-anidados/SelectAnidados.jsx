import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectAnidados = () => {
  const [state, setState] = useState()
  const [town, setTown] = useState()
  const [suburb, setSuburb] = useState()

  let token = 'f1e84648-66ea-40f5-b9ab-b32dc4e3c544'
  let urlEstado = `https://api.copomex.com/query/get_estados?token=${token}`
  let urlMunicipio = `https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${token}`
  let urlColonia = `https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${token}`

  return (
    <div className='container select-anidados'>
      <h2> Select Anidados </h2>
      <h3> México </h3>

      <SelectList
        key={1}
        handleChange={(e) => setState(e.target.value)}
        name='estado'
        id='estados'
        url={urlEstado}
      />

      {state && (
        <SelectList
          key={2}
          handleChange={(e) => setTown(e.target.value)}
          name='municipios'
          id='municipios'
          url={urlMunicipio}
        />
      )}

      {town && (
        <SelectList
          key={3}
          handleChange={(e) => setSuburb(e.target.value)}
          name='colonia'
          id='colonias'
          url={urlColonia}
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
