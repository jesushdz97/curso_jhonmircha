import { createContext, useState, useEffect, useContext } from 'react'
import { helpHttp } from '../helpers/helpHttp'

const crudContext = createContext()

const API = helpHttp()
const URL = 'http://localhost:5000/family'

export const CrudContextProvider = ({ children }) => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.get(URL).then((res) => {
      if (!res.err) {
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }
      setLoading(false)
    })
  }, [])

  const createData = (data) => {  
    data.id = db.length
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    API.post(URL, options).then((res) => {
      res.err ? setError(res) : setDb([...db, data])
    })
  }

  const updateData = (data) => {
    let endpoint = `${URL}/${data.id}`
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    API.put(endpoint, options).then((res) => {
      res.err
        ? setError(res)
        : setDb(db.map((el) => (el.id === data.id ? data : el)))
    })
    alert('¡Datos Actualizados!')
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Desea borrar a el usuario ${id}`)

    let endpoint = `${URL}/${id}`
    let options = { headers: { 'content-type': 'application/json' } }

    if (isDelete) {
      API.del(endpoint, options).then((res) => {
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

  const value = {
    db,
    dataToEdit,
    loading,
    error,
    createData,
    updateData,
    setDataToEdit,
    deleteData,
  }

  return <crudContext.Provider value={value}> {children} </crudContext.Provider>
}

export const useCrudContext = () => useContext(crudContext)

export default crudContext
