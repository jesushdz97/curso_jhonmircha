import { read } from '@popperjs/core'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const initialState = {
  data: [],
  isLoading: true,
  error: null,
}

const useFetch = (url, setState) => {
  const dispatch = useDispatch()
  const [fetchedData, setFetchedData] = useState(initialState)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        let error = {}
        error.message = response.statusText
        error.status = response.status

        throw error
      }

      const data = await response.json()

      setFetchedData({
        data,
        isLoading: false,
        error: null,
      })

      data.length && dispatch(setState(data))
    } catch (error) {
      setFetchedData({
        data: initialState.data,
        isLoading: false,
        error,
      })
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const { data, isLoading, error } = fetchedData
  return { data, isLoading, error }
}

export default useFetch
