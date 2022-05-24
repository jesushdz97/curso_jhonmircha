import React, { Component } from 'react'

class Reloj extends Component {
  componentWillUnmount() {
    console.log('FASE DE DESMONTAJE')
  }
  render() {
    return <p> {this.props.hour} </p>
  }
}

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log(0, 'Componente inicializado: no en DOM')
    this.state = { hour: new Date().toLocaleTimeString(), visible: false }
    this.timer = null
  }

  componentDidMount() {
    console.log(1, 'El componente ya se encuenta en el DOM')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, 'El estado o las props del componente han cambiado')
    console.log(prevState)
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({ hour: new Date().toLocaleTimeString() })
    }, 1000)
  }

  iniciar = () => {
    this.tictac()
    this.setState({ visible: true })
  }

  stop = () => {
    clearInterval(this.timer)
    this.setState({ visible: false })
  }

  render() {
    console.log(4, 'Componente renderizado (actualización - primer inicio)')
    return (
      <>
        <h2> Ciclo de Vida: Componentes de Clase </h2>
        {this.state.visible && <Reloj hour={this.state.hour} />}
        <button onClick={this.iniciar}> Iniciar </button>
        <button onClick={this.stop}> Detener </button>
        <hr />
      </>
    )
  }
}

export default LifeCycle
