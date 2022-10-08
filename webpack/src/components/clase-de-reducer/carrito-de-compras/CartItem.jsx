import React from 'react'

const CartItem = ({ data, delFromCard }) => {
  const { id, name, price, quantity } = data

  return (
    <li className='my-3 d-flex justify-content-between aling-items-center border rounded shadow-sm p-2'>
      <span className='text-bolder'>
        <span className='text-primary fw-3'> X{quantity}</span> | {name} |
        <span className='text-muted'>
          {' '}
          {(price * quantity).toLocaleString()}
        </span>
      </span>
      <span>
        <button
          className='btn btn-sm btn-warning mx-1'
          onClick={() => delFromCard(id)}>
          Eliminar Uno
        </button>
        <button
          className='btn btn-sm btn-danger mx-1'
          onClick={() => delFromCard(id, true)}>
          Eliminar Todo
        </button>
      </span>
    </li>
  )
}

export default CartItem
