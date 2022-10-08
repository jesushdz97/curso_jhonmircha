import axios from 'axios'
import types from '../actions/crudApiActions'
import { useDispatch, useSelector } from '../context'

const url = 'http://localhost:5000/'
const uri = 'family'
const api = () => axios.create({ baseURL: url })

const useServices = () => {
  const dispatch = useDispatch()
  const setIsLoading = useSelector('setIsLoading')
  const setError = useSelector('setErrorServer')

  const normalizeForm = (obj) => {
    for (const key in obj) obj[key] = obj[key].trim().toUpperCase()
  }

  const getFamily = async () => {
    try {
      setIsLoading(true)
      const res = await api().get(uri)
      const data = res?.data
      data && dispatch({ type: types.readAllData, payload: data })
    } catch (error) {
      const message = error?.message
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  const createData = async (form) => {
    try {
      setIsLoading(true)
      normalizeForm(form)
      const res = await api().post(uri, form)
      const data = res?.data
      data && dispatch({ type: types.createData, payload: data })
    } catch (error) {
      const message = error?.message
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteData = async (id) => {
    try {
      setIsLoading(true)
      const res = await api().delete(`${uri}/${id}`)
      res && dispatch({ type: types.deleteData, payload: id })
    } catch (error) {
      const message = error?.message
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  const updateData = async (dataToEdit) => {
    const { id, ...rest } = dataToEdit
    normalizeForm(rest)

    try {
      setIsLoading(true)
      const res = await api().put(`${uri}/${id}`, rest)
      const data = res?.data
      res && dispatch({ type: types.updateData, payload: data })
    } catch (error) {
      const message = error?.message
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return { getFamily, createData, deleteData, updateData }
}

export default useServices
