import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDB = [
  {
    id: 0,
    name: 'Jesus Hernandez Simanca',
    age: 24,
  },
  {
    id: 1,
    name: 'Angela Hernandez',
    age: 23,
  },
  {
    id: 2,
    name: 'Salma Hernandez',
    age: 20,
  },
  {
    id: 3,
    name: 'Rosmeri Simanca',
    age: 47,
  },
  {
    id: 4,
    name: 'Jesus Hernandez Gamez',
    age: 67,
  },
]

const CrudApp = () => {
  const [db, setDb] = useState(initialDB)
  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = (data) => {
    data.id = db.length
    setDb([...db, data])
  }
  const updateData = (data) => {}
  const deleteData = (id) => {}

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
