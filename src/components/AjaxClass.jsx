import React, { Component } from 'react'

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption> {name} </figcaption>
    </figure>
  )
}

class AjaxClass extends Component {
  state = { pokemons: [] }

  componentDidMount() {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
    const getPokemons = async () => {
      try {
        let res = await fetch(URL)
        let { results } = await res.json()
        results.forEach(async (el) => {
          let res = await fetch(el.url)
          let data = await res.json()
          let pokemon = {
            id: data.id,
            name: data.name,
            avatar: data.sprites.front_default,
          }
          let pokemons = [...this.state.pokemons, pokemon]
          this.setState({ pokemons })
        })
      } catch (error) {
        console.error(error)
      }
    }
    getPokemons()
  }

  render() {
    return (
      <>
        <h2>AJAX: Componentes de Clases </h2>
        {this.state.pokemons.length === 0 ? (
          <h4> Cargando Pokemones... </h4>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
        <hr />
      </>
    )
  }
}

export default AjaxClass
