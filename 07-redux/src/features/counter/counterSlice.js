import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    add: (state, action) => state + action.payload,
    sub: (state, action) => state - action.payload,
  },
})

export const { add, sub } = counterSlice.actions
export default counterSlice.reducer
