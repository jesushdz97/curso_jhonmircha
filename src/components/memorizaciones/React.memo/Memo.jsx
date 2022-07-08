import React from 'react'
import Counter from './Counter'
import ListUsos from './ListUsos'

const Memo = () => {
  return (
    <>
      <section className='container'>
        <h2 className='fst-italic text-uppercase'> Teoria (REACT MEMO) </h2>
        <p>
          <a
            href='https://es.reactjs.org/docs/react-api.html#reactmemo'
            target='_blank'
            rel='noreferrer'>
            React.memo
          </a>
        </p>
      </section>
      <ListUsos /> <hr />
      <Counter />
    </>
  )
}

export default Memo
