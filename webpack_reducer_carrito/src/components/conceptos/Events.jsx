import React, { Component } from 'react'

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  sumar() {
    this.setState({ counter: this.state.counter + 1 })
  }
  restar() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <>
        <h2> Eventos || {this.state.counter} </h2>
        <nav>
          <button onClick={this.sumar}>Incrementar</button>
          <button onClick={this.restar}>Decrementar</button>
        </nav> <hr />
      </>
    )
  }
}

export default Events
