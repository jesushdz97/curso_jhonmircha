import { useContext } from 'react'
import { useState } from 'react'
import { createContext, useReducer } from 'react'
import { crudApiReducer, initialState } from '../reducers/crudApiReducer'

const crudApiContext = createContext()

const CrudApiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(crudApiReducer, initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [errorServer, setErrorServer] = useState(null)

  const values = {
    state,
    dispatch,
    isLoading,
    setIsLoading,
    dataToEdit,
    setDataToEdit,
    errorServer,
    setErrorServer,
  }

  return (
    <crudApiContext.Provider value={values}>{children}</crudApiContext.Provider>
  )
}

const useApiContext = () => useContext(crudApiContext)
const useCrudApiState = () => useContext(crudApiContext).state
const useDispatch = () => useContext(crudApiContext).dispatch
const useSelector = (value) => useContext(crudApiContext)[value]

export {
  CrudApiContextProvider,
  useCrudApiState,
  useDispatch,
  useSelector,
  useApiContext,
}
