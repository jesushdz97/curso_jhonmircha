import React, { useEffect, useState } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import CrudForm from '../crud/CrudForm'
import CrudTable from '../crud/CrudTable'

const CrudApi = () => {
  const [db, setDb] = useState([])
  const [dataToEdit, setDataToEdit] = useState(null)

  let api = helpHttp()
  let url = 'http://localhost:5000/family'

  useEffect(() => {
    api.get(url).then((res) => !res.err && setDb(res))
  }, [])

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
      <h2>Crud API: JSON SERVER </h2>
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

export default CrudApi
