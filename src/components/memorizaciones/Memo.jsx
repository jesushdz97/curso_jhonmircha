import React from 'react'
import Counter from './Counter'
import ListUsosCallback from './ListUsosCallback'
import ListUsosMemo from './ListUsosMemo'

const Memo = () => {
  return (
    <>
      <section className='container'>
        <h2 className='fst-italic text-uppercase'> Teoria </h2>
        <ListUsosMemo /> <br />
        <ListUsosCallback />
      </section>
      <hr />
      <Counter />
    </>
  )
}

export default Memo
