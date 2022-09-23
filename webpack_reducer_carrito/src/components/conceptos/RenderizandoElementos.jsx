import React, { Component } from 'react'
import data from '../helpers/data/data.json'

const SeasonElement = ({ season }) => <li>{season}</li>

const FrameworkElement = ({ name, web }) => (
  <li>
    <a href={web} target='_blank' rel='noreferrer'>
      {name}
    </a>
  </li>
)

class RenderizandoElementos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seasons: ['Spring', 'Summer', 'Winter', 'Autumn'],
    }
  }
  render() {
    return (
      <>
        <h2> Renderizado de Elementos: SEASONS </h2>
        {this.state.seasons.map((season, index) => (
          <SeasonElement key={index} season={season} />
        ))}
        <h2> Renderizado de Elementos: FRAMEWORKS/LIB </h2>
        {data.framework.map((el) => (
          <FrameworkElement key={el.id} name={el.name} web={el.web} />
        ))}
        <hr />
      </>
    )
  }
}

export default RenderizandoElementos
