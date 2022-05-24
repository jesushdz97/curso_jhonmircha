import React, { Component } from 'react'

const Login = () => <h4> Login </h4>
const Logout = () => <h4> Logout </h4>

class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props)
    this.state = { session: true }
  }

  render() {
    return (
      <>
        <h2>Renderizado Condicional </h2>        
        {this.state.session ? <Login /> : <Logout />}
        <button onClick={() => this.setState({ session: !this.state.session })}> Login </button> <hr />
      </>
    )
  }
}

export default RenderizadoCondicional
