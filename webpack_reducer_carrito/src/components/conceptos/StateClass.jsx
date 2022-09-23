import React, { Component } from 'react'


const Hijo = ({counter}) => <p> Estado del Padre: {counter} </p>

export default class StateClass extends Component {
  constructor(props){
    super(props)
    this.state = { counter: 0}
  }
  render() {
    return (
      <>
      <h1>Estado con Class - {this.state.counter} </h1>
      <Hijo counter={this.state.counter} /> <hr />
      </>
    )
  }
}
