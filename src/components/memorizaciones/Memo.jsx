import React from 'react'
import Counter from './Counter'
import ListUsosCallback from './ListUsosCallback'
import ListUsosMemo from './ListUsosMemo'
import ListUsosUseMemo from './ListUsosUseMemo'

const Memo = () => {
  return (
    <>
      <section className='container'>
        <h2 className='fst-italic text-uppercase'> Teoria </h2>
        <br />
        <ListUsosMemo />
        <ListUsosCallback />
        <ListUsosUseMemo />
      </section>
      <hr />
      <Counter />
    </>
  )
}

export default Memo
