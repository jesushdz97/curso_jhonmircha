import React, { useEffect, useState } from 'react'
import { helpHttp } from '../../../../helpers/helpHttp'
import CrudFormRutas from '../crud-api-rutas/CrudFormRutas'
import CrudTableRutas from '../crud-api-rutas/CrudTableRutas'
import Loader from '../../../crud-api/Loader'
import Message from '../../../crud-api/Message'
import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Error404 } from '../../conceptos/pages/Error404'

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
    // data.id = db.length
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
    <div className='container'>
      <HashRouter>
        <header>
          <h2 className='text-center fw-bold'>Crud API: JSON SERVER </h2>
        </header>

        <nav>
          <NavLink to='family' activeclassname='active'>
            Family
          </NavLink>
          <NavLink to='family/agregar' activeclassname='active'>
            {dataToEdit ? 'Editando' : 'Agregar'}
          </NavLink>
        </nav>

        <Routes>
          <Route index element={<Navigate to='family' />} /> {/** '/' --> '/family' */}
          <Route path='family'>
            <Route
              index
              element={
                <>
                  {loading && <Loader />}
                  {error && (
                    <Message
                      message={`Error ${error.status}: ${error.statusText}`}
                      bgColor={'#dc3545'}
                    />
                  )}
                  {db && (
                    <CrudTableRutas
                      data={db}
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData}
                    />
                  )}
                </>
              }
            />
            <Route
              path='agregar'
              element={
                <CrudFormRutas
                  createData={createData}
                  updateData={updateData}
                  setDataToEdit={setDataToEdit}
                  dataToEdit={dataToEdit}
                />
              }
            />
            <Route
              path='editar/:id'
              element={
                <CrudFormRutas
                  createData={createData}
                  updateData={updateData}
                  setDataToEdit={setDataToEdit}
                  dataToEdit={dataToEdit}
                />
              }
            />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default CrudApi
