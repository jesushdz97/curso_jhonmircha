import { URL } from '@/env'

const destroy = async (id) => {
  const options = { method: 'DELETE' }
  const response = await fetch(`${URL}/${id}`, options)
  const data = await response.json()
  console.log(data)
}

export { destroy }
