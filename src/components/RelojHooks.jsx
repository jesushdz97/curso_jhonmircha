import React, { useState, useEffect } from 'react'

const Reloj = ({ hour }) => <h4> {hour} </h4>

const RelojHooks = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString())
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timer = null
    if (visible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString())
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [visible])

  useEffect(() => {
    console.log(hour)
  }, [hour])

  return (
    <>
      <h2> Reloj con Hooks </h2>
      {visible && <Reloj hour={hour} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  )
}

export default RelojHooks
