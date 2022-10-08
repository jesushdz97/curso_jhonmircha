import { useState, useEffect } from 'react'

export const useFetch2 = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, { signal })

        if (!res.ok) {
          let error = {
            error: res.error || true,
            status: res.status || '00',
            statusText: res.statusText || 'Ocurrió un error',
          }
          throw error
        }

        const json = await res.json()

        if (!signal.aborted) {
          setData(json)
          setError(null)
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null)
          setError(error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    return () => abortController.abort()
  }, [url])

  return { data, error, loading }
}
