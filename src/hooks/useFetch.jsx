import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [err, setErr] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(url)
        if (!res.ok) {
          let err = {
            err: true,
            status: res.status,
            statusText: !res.statusText ? 'Ocurrió un Error' : res.statusText,
          }
          throw err
        }
        let data = await res.json()

        setIsPending(false)
        setData(data)
        setErr({ err: false })
      } catch (err) {
        setIsPending(true)
        setErr(err)
      }
    }
    getData()
  }, [url])

  return { data, isPending, err }
}

export default useFetch
