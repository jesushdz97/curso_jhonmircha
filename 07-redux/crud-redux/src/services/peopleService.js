import { URL } from '@/env'

const options = (method = '', data) => ({
  method,
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(data),
})

const create = async (data) => await fetch(URL, options('POST', data))

const update = async (data) => await fetch(`${URL}/${data.id}`, options('PUT', data))

const destroy = async (id) => await fetch(`${URL}/${id}`, { method: 'DELETE' })

export { destroy, create, update }
