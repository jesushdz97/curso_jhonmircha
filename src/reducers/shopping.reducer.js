import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from '../actions/shopping.actions'

export const shoppingInitialState = {
  products: [
    { id: 1, name: 'Camisa Junior Club SA', price: 220000 },
    { id: 2, name: 'Camisa Deportivo Cali', price: 170000 },
    { id: 3, name: 'Camisa Atletico Nacional', price: 200000 },
    { id: 4, name: 'Camisa Millonarios FC', price: 190000 },
    { id: 5, name: 'Camisa Fortaleza FC', price: 180000 },
    { id: 6, name: 'Camisa Real Madrid FC', price: 260000 },
  ],
  cart: [],
}

export const shoppingReducer = (state, action) => {
  const { products, cart } = state
  const { type, payload } = action

  switch (type) {
    case ADD_TO_CART: {
      let productToCart = products.find((product) => product.id === payload)
      let itemInCart = cart.find((product) => product.id === payload)

      return itemInCart
        ? {
            ...state,
            cart: cart.map((item) =>
              item.id === payload
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          }
        : { ...state, cart: [...cart, { ...productToCart, quantity: 1 }] }
    }

    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = cart.find((item) => item.id === payload)
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: cart.map((item) =>
              item.id === payload
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            ),
          }
        : { ...state, cart: cart.filter((item) => item.id !== payload) }
    }

    case REMOVE_ALL_FROM_CART: {
      let newCart = cart.filter((product) => product.id !== payload)
      return { ...state, cart: newCart }
    }

    case CLEAR_CART:
      return { ...state, cart: shoppingInitialState.cart }

    default:
      return state
  }
}
