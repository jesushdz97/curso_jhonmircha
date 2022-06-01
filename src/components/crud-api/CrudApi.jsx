import React, { useEffect, useState } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import CrudForm from '../crud/CrudForm'
import CrudTable from '../crud/CrudTable'
import Loader from './Loader'
import Message from './Message'

const CrudApi = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url = 'http://localhost:5000/family'

  useEffect(() => {
    setLoading(true)
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res)
          setError(null)
        } else {
          setDb(null)
          setError(res)
        }
        setLoading(false)
      })
  }, [url])

  const createData = (data) => {
    data.id = db.length
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    api.post(url, options).then((res) => {
      res.err ? setError(res) : setDb([...db, data])
    })
  }

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    api.put(endpoint, options).then((res) => {
      res.err
        ? setError(res)
        : setDb(db.map((el) => (el.id === data.id ? data : el)))
    })
    alert('¡Datos Actualizados!')
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Desea borrar a el usuario ${id}`)

    let endpoint = `${url}/${id}`
    let options = { headers: { 'content-type': 'application/json' } }

    if (isDelete) {
      api.del(endpoint, options).then((res) => {
        if (res.err) {
          setError(res)
        } else {
          setDb(db.filter((el) => el.id !== id))
          alert('¡Dato Eliminado!')
        }
      })
    } else {
      return
    }
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
      {loading && <Loader />}
      {error && (
        <Message
          message={`Error ${error.status}: ${error.statusText}`}
          bgColor={'#dc3545'}
        />
      )}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </>
  )
}

export default CrudApi
