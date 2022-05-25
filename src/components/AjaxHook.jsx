import React, { useState, useEffect } from 'react'

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption> {name} </figcaption>
    </figure>
  )
}

const AjaxHook = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon'
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      try {
        let response = await fetch(URL)
        let { results } = await response.json()
        results.forEach(async (el) => {
          let response = await fetch(el.url)
          let data = await response.json()
          let pokemon = {
            id: data.id,
            name: data.name,
            avatar: data.sprites.front_default,
          }          
          setPokemons((pokemons) => [...pokemons, pokemon])
        })
      } catch (err) {
        console.error(err)
      }
    }

    getPokemons()
  }, [])

  return (
    <>
      <h2> Peticiones Ajax: Hooks </h2>
      {pokemons.length === 0 ? (
        <h4 style={{ color: 'gray' }}> Cargando Pokemones... </h4>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
      <hr />
    </>
  )
}

export default AjaxHook
