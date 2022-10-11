import counterReducer from '@/features/counter/counterSlice'
import cartReducer from '@/features/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})
