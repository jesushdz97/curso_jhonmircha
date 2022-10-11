import { createSlice } from '@reduxjs/toolkit'

const findProduct = (cart, payload) => cart.find((el) => el.id === payload.id)

const initialState = []

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProduct: (cart, action) => {
      let { payload } = action
      let product = findProduct(cart, payload)
      product ? (product.quantity += 1) : cart.push({ ...payload, quantity: 1 })
    },
    removeOne: (cart, action) => {
      let { payload } = action
      let product = findProduct(cart, payload)
      action.payload.quantity === 1
        ? cart.splice(cart.indexOf(product), 1)
        : (product.quantity -= 1)
    },
    removeProduct: (cart, action) => {
      let { payload } = action
      let product = findProduct(cart, payload)
      cart.splice(cart.indexOf(product), 1)
    },
    addOne: (cart, action) => {
      let product = findProduct(cart, action.payload)
      product.quantity += 1
    },
    clearCart: (cart) => cart = initialState
  },
})

export const { addProduct, removeOne, removeProduct, addOne, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
