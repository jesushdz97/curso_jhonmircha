import React, { useReducer } from 'react'
import {
  shoppingReducer,
  shoppingInitialState,
} from '../../../reducers/shopping.reducer'
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from '../../../actions/shopping.actions'
import ProductItem from './ProductItem'
import CartItem from './CartItem'

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const { products, cart } = state

  const addToCart = (id) => dispatch({ type: ADD_TO_CART, payload: id })

  const delFromCart = (id, all = false) =>
    all
      ? dispatch({ type: REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: REMOVE_ONE_FROM_CART, payload: id })

  const clearCart = () => dispatch({ type: CLEAR_CART })

  return (
    <div className='p-3'>
      <h3>Carrito de Compras</h3>

      <div className='row row-cols-2'>
        {/** PRODUCTOS */}
        <article className='col'>
          <h4> Productos </h4>
          <div className='row row-cols-md-2 row-cols-sm-1 g-2'>
            {products &&
              products.map((product, key) => (
                <ProductItem key={key} data={product} addToCart={addToCart} />
              ))}
          </div>
        </article>
        {/** PRODUCTOS */}

        <article className='col'>
          <h4> Carrito </h4>

          {cart.length > 0 &&
            cart.map((item, key) => (
              <CartItem key={key} data={item} delFromCard={delFromCart} />
            ))}

          <div className='d-flex justify-content-between'>
            <h4>
              TOTAL:{' '}
              {cart
                .reduce((acc, el) => acc + el.price * el.quantity, 0)
                .toLocaleString()}
            </h4>
            <button className='btn btn-outline-secondary' onClick={clearCart}>
              Limpiar Carrito
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ShoppingCart
