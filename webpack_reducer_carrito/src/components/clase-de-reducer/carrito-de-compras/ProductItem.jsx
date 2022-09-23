import React from 'react'

const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data

  return (
    <div className='col'>
      <div className='card shadow'>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h6 className='card-subtitle text-muted mb-3'>
            {price.toLocaleString()}
          </h6>
          <button
            className='btn btn-outline-dark'
            onClick={() => addToCart(id)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
