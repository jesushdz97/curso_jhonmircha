import React from 'react'
import useFetch from '../hooks/useFetch'

const HooksPersonalizados = () => {
  const jsonPlaceHolder = 'https://jsonplaceholder.typicode.com/users'
  // const url = 'https://pokeapi.co/api/v2/pokemon'
  const { data, isPending, err } = useFetch(jsonPlaceHolder)

  return (
    <>
      <h2> Hook Personalizados </h2>
      <h4>{JSON.stringify(isPending)}</h4>
      <h4>{JSON.stringify(err)}</h4>
      {/* <h4>{JSON.stringify(data)}</h4> */}
      <hr />
    </>
  )
}

export default HooksPersonalizados
