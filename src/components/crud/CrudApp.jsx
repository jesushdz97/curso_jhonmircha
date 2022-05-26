import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDB = [
  {
    id: 0,
    name: 'Jesus Hernandez',
    age: 67,
  },
  {
    id: 1,
    name: 'Rosmeri Simanca',
    age: 47,
  },
  {
    id: 2,
    name: 'Jesus Hernandez Simanca',
    age: 24,
  },
  {
    id: 3,
    name: 'Angela Hernandez Simanca',
    age: 23,
  },
  {
    id: 4,
    name: 'Salma Hernandez Simanca',
    age: 20,
  },
]

const CrudApp = () => {
  const [db, setDb] = useState(initialDB)
  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = (data) => {
    data.id = db.length
    setDb([...db, data])
  }

  const updateData = (data) => {
    setDb(db.map((el) => (el.id === data.id ? data : el)))
    alert('¡Datos Actualizados!')
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Desea borrar a el usuario ${id}`)
    isDelete && setDb(db.filter((el) => el.id !== id))
    alert('¡Dato Eliminado!')
  }

  return (
    <>
      <h2>Crud App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  )
}

export default CrudApp
